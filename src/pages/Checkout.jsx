// src/components/Checkout.jsx
import React, { useState } from "react";
import "../index.css";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dmtsy9msz/image/upload"; // ganti <cloud_name>
const UPLOAD_PRESET = "xel-upload"; // ganti dengan preset-mu

const Checkout = () => {
  const [buktiBayar, setBuktiBayar] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ganti dengan ID produk yang sesuai dari database
  const productId = "661ea0b1a179c76a8ec6e1f1"; 

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setBuktiBayar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buktiBayar) return;

    try {
      setLoading(true);
      setMessage("Mengunggah ke Cloudinary...");

      // 1. Upload ke Cloudinary
      const formData = new FormData();
      formData.append("file", buktiBayar);
      formData.append("upload_preset", UPLOAD_PRESET);

      const cloudinaryRes = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const data = await cloudinaryRes.json();
      const imageUrl = data.secure_url;

      if (!imageUrl) throw new Error("Gagal upload ke Cloudinary");

      setMessage("Mengirim ke server...");

      // 2. POST ke backend
      const token = localStorage.getItem("token"); // sesuaikan jika token disimpan di tempat lain

      const backendRes = await fetch("/api/transaction/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, imageUrl }),
      });

      const result = await backendRes.json();
      if (!backendRes.ok) throw new Error(result.error || "Gagal kirim ke server");

      setMessage("Berhasil upload bukti pembayaran!");
      setBuktiBayar(null);
      setPreview("");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="checkout-section">
      <h2>Upload Bukti Pembayaran</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input type="file" accept="image/*" onChange={handleUpload} className="file-input" />
        {preview && <img src={preview} alt="Preview" className="preview-image" />}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
      {message && <p className="status-message">{message}</p>}
    </section>
  );
};

export default Checkout;
