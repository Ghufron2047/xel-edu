import React, { useState } from 'react';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      setMessage(result.message || 'Berhasil update');
    } catch (err) {
      setMessage('Gagal update profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Profil</h2>
      <input
        type="email"
        placeholder="Email baru"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password baru"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleUpdate} disabled={loading}>
        {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
