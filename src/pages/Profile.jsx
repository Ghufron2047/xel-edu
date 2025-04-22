// src/components/Profile.jsx
import React, { useState } from "react";
import "../index.css";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Update Email:", email);
    console.log("Update Password:", password);
    // Kirim ke backend
  };

  return (
    <section className="profile-section">
      <h2>Ubah Profil</h2>
      <form onSubmit={handleUpdate} className="profile-form">
        <input
          type="email"
          placeholder="Email baru"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password baru"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">Update</button>
      </form>
    </section>
  );
};

export default Profile;
