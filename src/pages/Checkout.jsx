import React, { useState } from 'react';

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dmtsy9msz/image/upload";
const UPLOAD_PRESET = "xel-upload";

const Checkout = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage('Pilih file terlebih dahulu.');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    setUploading(true);
    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      const proofUrl = data.secure_url;
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ proofUrl }),
      });

      const result = await response.json();
      setMessage(result.message || 'Berhasil diupload!');
    } catch (err) {
      setMessage('Upload gagal');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Bukti Pembayaran</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Mengupload...' : 'Upload'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
