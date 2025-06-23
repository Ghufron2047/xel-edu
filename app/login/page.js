'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) router.replace('/')
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

      router.push(jwt.role === 'admin' ? '/admin' : '/profile')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Login</Button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>
          <div className="text-center text-sm space-y-1">
            <p>Belum punya akun? <Link href="/register" className="underline">Register</Link></p>
            <p><Link href="/reset-password" className="underline">Lupa Password?</Link></p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
