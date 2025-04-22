import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Link reset dikirim ke email.");
      } else {
        alert("Gagal mengirim reset password.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Kirim Link Reset</button>
        <p>
          Ingat password? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
