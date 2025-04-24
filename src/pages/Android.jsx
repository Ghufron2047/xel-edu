import { Color } from '@cloudinary/url-gen/qualifiers';
import React from 'react';
import { useNavigate } from 'react-router-dom';
<h1 style={Color.RED}>BELUM BERFUNGSI!</h1>,
<h2>INI HANYA CONTOH</h2>;
const androidApps = [
  {
    id: 'apk1',
    name: 'Kamus Kimia',
    description: 'Aplikasi kamus istilah kimia dengan animasi interaktif.',
    price: 20000,
  },
  {
    id: 'apk2',
    name: 'Fisika Quiz',
    description: 'Latihan soal Fisika dalam bentuk game.',
    price: 25000,
  },
  {
    id: 'apk3',
    name: 'UTBK Android',
    description: 'Simulasi UTBK langsung dari HP kamu!',
    price: 35000,
  },
];

export default function Android() {
  const navigate = useNavigate();

  const handleBuy = (product) => {
    navigate('/checkout', { state: product });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">📱 Aplikasi Android Premium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {androidApps.map((app) => (
          <div key={app.id} className="bg-gray-800 rounded-2xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{app.description}</p>
            <p className="text-yellow-400 font-bold mb-4">Rp {app.price.toLocaleString()}</p>
            <button
              onClick={() => handleBuy(app)}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl"
            >
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
