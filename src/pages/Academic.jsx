import React from 'react';
import '../index.css';

const materiList = [
  // HTML & CSS
  {
    id: 1,
    title: 'Pengenalan HTML dan CSS',
    description: 'Pelajari struktur dasar HTML dan cara styling dengan CSS.',
    link: 'https://www.freecodecamp.org/learn/responsive-web-design/',
  },
  {
    id: 2,
    title: 'HTML Forms & Input',
    description: 'Belajar membuat form dan input dengan HTML.',
    link: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
  },
  {
    id: 3,
    title: 'CSS Flexbox & Grid',
    description: 'Layouting responsif dengan Flexbox dan Grid.',
    link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
  },

  // JavaScript Dasar
  {
    id: 4,
    title: 'Dasar Pemrograman JavaScript',
    description: 'Pengenalan tentang variable, function, dan array dalam JavaScript.',
    link: 'https://javascript.info/first-steps',
  },
  {
    id: 5,
    title: 'Control Flow: if, loop, switch',
    description: 'Belajar percabangan dan perulangan di JavaScript.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling',
  },
  {
    id: 6,
    title: 'JavaScript DOM',
    description: 'Manipulasi HTML menggunakan JavaScript DOM.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
  },

  // Algoritma & Logika
  {
    id: 7,
    title: 'Algoritma & Logika Dasar',
    description: 'Logika pemrograman, percabangan, dan perulangan.',
    link: 'https://visualgo.net/en',
  },
  {
    id: 8,
    title: 'Struktur Data Dasar',
    description: 'Pengenalan array, stack, queue.',
    link: 'https://www.geeksforgeeks.org/data-structures/',
  },
  {
    id: 9,
    title: 'Problem Solving Pemula',
    description: 'Latihan soal logika dan algoritma pemula.',
    link: 'https://www.codewars.com/',
  },

  // Backend Development
  {
    id: 10,
    title: 'Pengenalan Node.js',
    description: 'Belajar dasar backend menggunakan Node.js.',
    link: 'https://nodejs.dev/en/learn/',
  },
  {
    id: 11,
    title: 'Dasar Backend dengan PHP',
    description: 'Pelajari dasar-dasar PHP untuk backend.',
    link: 'https://www.w3schools.com/php/',
  },
  {
    id: 12,
    title: 'Belajar Python untuk Web',
    description: 'Dasar Python dan web backend dengan Flask/Django.',
    link: 'https://realpython.com/tutorials/web-dev/',
  },

  // Framework
  {
    id: 13,
    title: 'React Dasar',
    description: 'Belajar membuat UI dengan React.js.',
    link: 'https://react.dev/learn',
  },
  {
    id: 14,
    title: 'Vue.js Pengenalan',
    description: 'Dasar penggunaan Vue.js untuk front-end.',
    link: 'https://vuejs.org/guide/introduction.html',
  },
  {
    id: 15,
    title: 'Laravel untuk Pemula',
    description: 'Dasar framework Laravel dengan PHP.',
    link: 'https://laravel.com/docs/10.x',
  },

  // Database
  {
    id: 16,
    title: 'Belajar MySQL Dasar',
    description: 'Pelajari dasar-dasar query database SQL.',
    link: 'https://www.w3schools.com/mysql/',
  },
  {
    id: 17,
    title: 'MongoDB untuk Pemula',
    description: 'Dasar penggunaan database NoSQL MongoDB.',
    link: 'https://www.mongodb.com/basics',
  },

  // REST API & DevOps
  {
    id: 18,
    title: 'Dasar REST API',
    description: 'Konsep dasar RESTful API dan implementasinya.',
    link: 'https://www.restapitutorial.com/',
  },
  {
    id: 19,
    title: 'Postman untuk Testing API',
    description: 'Belajar gunakan Postman untuk uji coba API.',
    link: 'https://learning.postman.com/docs/getting-started/introduction/',
  },
  {
    id: 20,
    title: 'Pengenalan DevOps',
    description: 'Dasar konsep DevOps dan tools yang digunakan.',
    link: 'https://roadmap.sh/devops',
  },
];

export default function Academic() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl mb-4 font-bold text-center">📚 Materi Gratis Pemrograman Dasar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiList.map((materi) => (
          <div key={materi.id} className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">{materi.title}</h3>
            <p className="text-sm mb-4">{materi.description}</p>
            <a
              href={materi.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm"
            >
              Lihat Materi
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
