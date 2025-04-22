import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "/login";
      } else {
        alert("Registrasi gagal.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register to Xel-Edu</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <p>
          Sudah punya akun? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
