'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const token = typeof window !== 'undefined' && localStorage.getItem('token');
  const [produkList, setProdukList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '' });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  const fetchProduk = async () => {
    const res = await fetch('/api/product');
    const json = await res.json();
    setProdukList(json.products || []);
  };

  const fetchTransaksi = async () => {
    const res = await fetch('/api/checkout');
    const json = await res.json();
    setCheckoutList(json.data || []);
  };

  const checkRole = async () => {
    const res = await fetch('/api/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (json.role !== 'admin') router.push('/');
  };

  useEffect(() => {
    checkRole();
    fetchProduk();
    fetchTransaksi();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/product?id=${editingId}` : '/api/product';
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    if (json.success) {
      fetchProduk();
      setForm({ title: '', description: '', price: '' });
      setEditingId(null);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/product?id=${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (json.success) fetchProduk();
  };

  const updateStatus = async (id) => {
    const res = await fetch('/api/transaction', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, status: 'Sukses' }),
    });
    const json = await res.json();
    setMessage(json.message);
    if (json.success) fetchTransaksi();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Kelola Produk</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Judul" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /><br />
        <textarea placeholder="Deskripsi" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /><br />
        <input type="number" placeholder="Harga" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} /><br />
        <button type="submit">{editingId ? 'Update' : 'Tambah'} Produk</button>
      </form>
      <ul>
        {produkList.map((p) => (
          <li key={p._id}>
            <b>{p.title}</b> - Rp{p.price}<br />
            <button onClick={() => setEditingId(p._id)}>Edit</button>
            <button onClick={() => handleDelete(p._id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <h3>Transaksi Masuk</h3>
      {checkoutList.map((item) => (
        <div key={item._id}>
          <p>{item.name} - {item.product} ({item.status})</p>
          <button onClick={() => updateStatus(item._id)}>Tandai Sukses</button>
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}
