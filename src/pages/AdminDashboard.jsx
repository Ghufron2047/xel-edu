// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import "../index.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/admin/product/transactions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || "dummy-admin-token"}`,
        },
      });
      const data = await res.json();
      if (res.ok) setTransactions(data);
      else console.error("Gagal fetch transaksi:", data.error);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const updateStatus = async (id) => {
    try {
      const res = await fetch(`/api/admin/product/update-transaction.js`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || "dummy-admin-token"}`,
        },
        body: JSON.stringify({ transactionId: id, status: "Success" }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Status berhasil diubah!");
        fetchTransactions(); // refresh list
      } else {
        alert(data.error || "Gagal mengubah status");
      }
    } catch (err) {
      alert("Terjadi kesalahan.");
    }
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", description: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <section className="admin-section">
      <h2>Admin Dashboard</h2>

      {/* Form Tambah Produk */}
      <div className="admin-form">
        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value={newProduct.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Deskripsi"
          value={newProduct.description}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="price"
          placeholder="Harga"
          value={newProduct.price}
          onChange={handleChange}
          className="input-field"
        />
        <button className="submit-button" onClick={handleAdd}>Tambah Produk</button>
      </div>

      {/* Daftar Produk */}
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>Rp {product.price}</span>
            <button className="delete-button" onClick={() => handleDelete(product.id)}>Hapus</button>
          </div>
        ))}
      </div>

      {/* Daftar Transaksi */}
      <div className="transaction-list">
        <h3>Daftar Transaksi</h3>
        {transactions.length === 0 ? (
          <p>Belum ada transaksi.</p>
        ) : (
          transactions.map((tx) => (
            <div key={tx._id} className="transaction-card">
              <p><strong>Email:</strong> {tx.userId?.email || "-"}</p>
              <p><strong>Produk:</strong> {tx.productId?.title || "-"}</p>
              <p><strong>Harga:</strong> Rp {tx.productId?.price || "?"}</p>
              <p><strong>Status:</strong> {tx.status}</p>
              {tx.buktiBayar && (
                <img
                  src={tx.buktiBayar}
                  alt="Bukti Bayar"
                  className="bukti-preview"
                />
              )}
              {tx.status !== "Success" && (
                <button className="status-button" onClick={() => updateStatus(tx._id)}>
                  Tandai Sukses
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;
