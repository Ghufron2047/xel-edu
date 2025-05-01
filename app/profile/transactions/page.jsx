"use client";
import { useEffect, useState } from "react";

export default function UserTransactions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/transaction?mode=user")
      .then((res) => res.json())
      .then((res) => {
        setData(res.transactions || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal mengambil data transaksi");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Riwayat Transaksi</h1>
      {loading && <p>Memuat data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !data.length && <p>Tidak ada transaksi ditemukan.</p>}
      {data.map((trx) => (
        <div key={trx._id} className="border p-4 mb-3 rounded">
          <p><strong>Status:</strong> {trx.status}</p>
          <p><strong>Tanggal:</strong> {new Date(trx.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
