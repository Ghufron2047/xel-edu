'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TransaksiAdminPage() {
  const router = useRouter();
  const [transaksi, setTransaksi] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Cek role dari localStorage atau endpoint profil
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      router.push('/');
    } else {
      setUserRole(user.role);
      fetchTransaksi();
    }
  }, []);

  const fetchTransaksi = async () => {
    try {
      const res = await fetch('/api/checkout?mode=all'); // mode=all untuk semua transaksi
      const data = await res.json();
      setTransaksi(data);
    } catch (error) {
      console.error('Gagal fetch transaksi:', error);
    }
  };

  const ubahStatus = async (id, status) => {
    try {
      await fetch(`/api/checkout`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'updateStatus', id, status }),
      });
      fetchTransaksi(); // Refresh
    } catch (error) {
      console.error('Gagal ubah status:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Halaman Transaksi Admin</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Produk</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((t) => (
            <tr key={t._id}>
              <td className="p-2 border">{t.email}</td>
              <td className="p-2 border">{t.namaProduk}</td>
              <td className="p-2 border">{t.status}</td>
              <td className="p-2 border">
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                  onClick={() => ubahStatus(t._id, 'Sukses')}
                >
                  Tandai Sukses
                </button>
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                  onClick={() => ubahStatus(t._id, 'Pending')}
                >
                  Pending
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
