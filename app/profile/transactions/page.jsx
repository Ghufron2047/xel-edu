'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '../components/ui/skeleton';

export default function UserTransactions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/transaction?mode=user')
      .then((res) => res.json())
      .then((res) => {
        setData(res.transactions || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Gagal mengambil data transaksi');
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Transaksi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading && (
            <>
              <Skeleton className="h-16 w-full rounded" />
              <Skeleton className="h-16 w-full rounded" />
            </>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {!loading && !data.length && <p className="text-muted-foreground">Tidak ada transaksi ditemukan.</p>}

          {!loading &&
            data.map((trx) => (
              <Card key={trx._id} className="bg-muted p-4">
                <p><span className="font-semibold">Status:</span> {trx.status}</p>
                <p><span className="font-semibold">Tanggal:</span> {new Date(trx.createdAt).toLocaleString()}</p>
              </Card>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
