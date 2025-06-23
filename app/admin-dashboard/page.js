'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

export default function AdminPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
      return
    }
    try {
      const decoded = jwtDecode(token)
      if (decoded.role !== 'admin') {
        router.replace('/')
      } else {
        setLoading(false)
      }
    } catch (e) {
      router.replace('/login')
    }
  }, [])
  if (loading) return <p>Loading...</p>

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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
  
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Kelola Produk</h3>
        <form onSubmit={handleSubmit} className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Judul"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Deskripsi"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            placeholder="Harga"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {editingId ? 'Update' : 'Tambah'} Produk
          </button>
        </form>
  
        <div className="space-y-4">
          {produkList.map((p) => (
            <div key={p._id} className="border p-4 rounded bg-white shadow-sm">
              <h4 className="font-bold">{p.title}</h4>
              <p className="text-gray-600">Rp{p.price}</p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => setEditingId(p._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
  
      <section>
        <h3 className="text-xl font-semibold mb-2">Transaksi Masuk</h3>
        <div className="space-y-3">
          {checkoutList.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded bg-white shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.product} - <span className="italic">{item.status}</span>
                </p>
              </div>
              <button
                onClick={() => updateStatus(item._id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Tandai Sukses
              </button>
            </div>
          ))}
        </div>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </section>
    </div>
  );  
}
