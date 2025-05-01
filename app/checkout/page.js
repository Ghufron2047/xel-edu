'use client'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dmtsy9msz/image/upload';

import '../globals.css';

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) return <p>Loading...</p>
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage('Pilih file terlebih dahulu.');
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      const uploadRes = await fetch(CLOUDINARY_URL, { method: 'POST', body: formData });
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

  return (
    <div>
      {/* konten halaman checkout */}
      <h2>Upload Bukti Pembayaran</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Mengupload...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
