'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dmtsy9msz/image/upload';
const UPLOAD_PRESET = 'ml_default'; // pastikan sesuai dengan setting Cloudinary-mu

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setLoading(false);
    }
  }, []);

  const handleUpload = async () => {
    if (!file) return setMessage('Pilih file terlebih dahulu.');
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);

      const uploadRes = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await uploadRes.json();
      const proofUrl = data.secure_url;

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proofUrl }),
      });

      const result = await res.json();
      setMessage(result.message || 'Berhasil diupload!');
    } catch {
      setMessage('Upload gagal');
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload Bukti Pembayaran</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
          {message && <p className="text-sm mt-2 text-muted-foreground">{message}</p>}
        </CardContent>
        <CardFooter>
          <Button onClick={handleUpload} disabled={uploading} className="w-full">
            {uploading ? 'Mengupload...' : 'Upload'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
