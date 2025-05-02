'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) router.replace('/') // atau arahkan ke /profile atau /admin
  }, [])
  const handleReset = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth?mode=reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Gagal mengirim reset password')

      setMessage('Silakan cek email Anda untuk instruksi reset password.')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Kirim</button>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
      <p><a href="/login">Kembali ke Login</a></p>
    </div>
  )
}
