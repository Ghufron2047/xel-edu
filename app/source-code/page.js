import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../index.css';
import { Color } from '@cloudinary/url-gen/qualifiers';
<h1 style={Color.RED}>BELUM BERFUNGSI!</h1>,
<h2>INI HANYA CONTOH</h2>;
const kodeList = [
  {
    id: 1,
    title: 'Function JavaScript',
    code: `function greet(name) {
  return "Halo, " + name + "!";
}`,
    filename: 'greet.js',
  },
  {
    id: 2,
    title: 'Fetch API',
    code: `fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));`,
    filename: 'fetch.js',
  },
  {
    id: 3,
    title: 'Basic HTML',
    code: `<!DOCTYPE html>
<html>
  <head><title>Hello</title></head>
  <body><h1>Halo Dunia!</h1></body>
</html>`,
    filename: 'hello.html',
  },
];

export default function SourceCode() {
  const [copiedId, setCopiedId] = useState(null);
  const [search, setSearch] = useState('');

  const handleCopy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Gagal menyalin kode:', err);
    }
  };

  const handleDownload = (code, filename) => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
  };

  const filteredList = kodeList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">💻 Source Code Gratis</h2>

      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="🔍 Cari source code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-80 rounded-lg text-black"
        />
      </div>

      <div className="space-y-6">
        {filteredList.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-2xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded">
              {item.code}
            </SyntaxHighlighter>
            <div className="mt-3 flex gap-3">
              <button
                onClick={() => handleCopy(item.code, item.id)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-sm rounded"
              >
                {copiedId === item.id ? '✔ Tersalin' : 'Copy'}
              </button>
              <button
                onClick={() => handleDownload(item.code, item.filename)}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-sm rounded"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
