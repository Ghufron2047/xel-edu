import { Color } from '@cloudinary/url-gen/qualifiers';
import React from 'react';
import { useNavigate } from 'react-router-dom';
<h1 style={Color.RED}>BELUM BERFUNGSI!</h1>,
<h2>INI HANYA CONTOH</h2>;
const webApps = [
  {
    id: 'web1',
    name: 'Kalkulator Kimia',
    description: 'Web App kalkulator molekul untuk siswa SMA.',
    price: 25000,
  },
  {
    id: 'web2',
    name: 'Simulasi Fisika',
    description: 'Simulasi interaktif gerak peluru dan gaya gesek.',
    price: 30000,
  },
  {
    id: 'web3',
    name: 'Latihan UTBK Online',
    description: 'Kumpulan soal UTBK terbaru dengan pembahasan.',
    price: 40000,
  },
];

export default function WebApp() {
  const navigate = useNavigate();

  const handleBuy = (product) => {
    navigate('/checkout', { state: product });
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">🌐 Web Apps Premium</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {webApps.map((app) => (
          <div key={app.id} className="bg-gray-800 rounded-2xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
            <p className="text-sm text-gray-300 mb-2">{app.description}</p>
            <p className="text-yellow-400 font-bold mb-4">Rp {app.price.toLocaleString()}</p>
            <button
              onClick={() => handleBuy(app)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl"
            >
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
