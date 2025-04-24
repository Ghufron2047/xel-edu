// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [produkList, setProdukList] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '' });
  const [editingId, setEditingId] = useState(null);
  const [checkoutList, setCheckoutList] = useState([]);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  // === CRUD PRODUK ===
  const fetchProduk = async () => {
    const res = await fetch('/api/product');
    const data = await res.json();
    setProdukList(data.products || []);
  };

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

    const result = await res.json();
    if (result.success) {
      setForm({ title: '', description: '', price: '' });
      setEditingId(null);
      fetchProduk();
    } else {
      alert(result.message || 'Gagal simpan produk');
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/product?id=${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    if (result.success) fetchProduk();
  };

  const handleEdit = (produk) => {
    setForm({ title: produk.title, description: produk.description, price: produk.price });
    setEditingId(produk._id);
  };

  // === KELAS TRANSAKSI ===
  const fetchTransaksi = async () => {
    const res = await fetch('/api/checkout');
    const json = await res.json();
    if (json.success) setCheckoutList(json.data);
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch('/api/transaction', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const json = await res.json();
      setMessage(json.message);
      if (json.success) fetchTransaksi();
    } catch (err) {
      setMessage('Gagal update status transaksi');
    }
  };

  useEffect(() => {
    fetchProduk();
    fetchTransaksi();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* ==== FORM PRODUK ==== */}
      <h3>Kelola Produk</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        /><br />
        <textarea
          placeholder="Deskripsi"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        /><br />
        <input
          type="number"
          placeholder="Harga"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        /><br />
        <button type="submit">{editingId ? 'Update Produk' : 'Tambah Produk'}</button>
      </form>

      <ul>
        {produkList.map((produk) => (
          <li key={produk._id}>
            <b>{produk.title}</b> - Rp{produk.price}<br />
            {produk.description}<br />
            <button onClick={() => handleEdit(produk)}>Edit</button>
            <button onClick={() => handleDelete(produk._id)}>Hapus</button>
            <hr />
          </li>
        ))}
      </ul>

      {/* ==== DATA TRANSAKSI ==== */}
      <h3>Kelola Transaksi</h3>
      {checkoutList.map(item => (
        <div key={item._id}>
          <p>
            <b>{item.name}</b> - {item.product} <br />
            Status: <b>{item.status}</b><br />
            <button onClick={() => updateStatus(item._id, 'Sukses')}>Ubah ke Sukses</button>
          </p>
          <hr />
        </div>
      ))}
      <p>{message}</p>
    </div>
  );
}
