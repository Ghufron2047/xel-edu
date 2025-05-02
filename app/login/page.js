'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) router.replace('/') // atau arahkan ke /profile atau /admin
  }, [])
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth?mode=login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
  
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
  
      localStorage.setItem('token', data.token)
      const jwt = JSON.parse(atob(data.token.split('.')[1]))
      
      if (jwt.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/profile')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Belum punya akun? <a href="/register">Register</a></p>
      <p><a href="/reset-password">Lupa Password?</a></p>
    </div>
  )
}
