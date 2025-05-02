'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HistoryPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [history, setHistory] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) return <p>Loading...</p>
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'user') {
      router.push('/');
    } else {
      setUserEmail(user.email);
      fetchRiwayat(user.email);
    }
  }, []);

  const fetchRiwayat = async (email) => {
    try {
      const res = await fetch(`/api/checkout?mode=user&email=${email}`);
      const data = await res.json();
      setHistory(data);
    } catch (error) {
      console.error('Gagal fetch riwayat:', error);
    }
  };

  return (
    <div className="p-6">
      {/* konten halaman profile */}
      <h2 className="text-2xl font-bold mb-4">Riwayat Pembelian</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Produk</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {history.map((t) => (
            <tr key={t._id}>
              <td className="p-2 border">{t.namaProduk}</td>
              <td className="p-2 border">{t.status}</td>
              <td className="p-2 border">{new Date(t.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
