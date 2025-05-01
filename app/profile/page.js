'use client'
import { useState } from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const handleUpdate = async () => {
    const res = await fetch('/api/auth?mode=update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message || 'Update berhasil!');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* konten halaman profile */}
      <h2 className="text-xl font-bold mb-4">Ubah Email / Password</h2>
      <input className="input" placeholder="Email baru" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="input mt-2" placeholder="Password baru" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn mt-4" onClick={handleUpdate}>Update</button>
    </div>
  );
}
