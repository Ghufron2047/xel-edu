'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) router.replace('/') // atau arahkan ke /profile atau /admin
  }, [])
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth?mode=register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Register gagal')

      router.push('/login')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Sudah punya akun? <a href="/login">Login</a></p>
    </div>
  )
}
