<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Xel-Edu</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    // Dark mode toggle
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    }
  </script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    .futuristic {
      font-family: 'Orbitron', sans-serif;
    }
    .floating-assistant {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: #4f46e5;
      color: white;
      padding: 1rem;
      border-radius: 9999px;
      box-shadow: 0 0 20px rgba(79, 70, 229, 0.6);
      cursor: pointer;
      z-index: 9999;
    }
  </style>
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white futuristic">
  <!-- Navigation -->
  <nav class="flex justify-between items-center p-4 shadow dark:shadow-lg bg-gray-100 dark:bg-gray-800">
    <div class="text-xl font-bold">Xel-Edu</div>
    <div class="space-x-4">
      <a href="#home" class="hover:text-indigo-500">Home</a>
      <a href="#academic" class="hover:text-indigo-500">Academic</a>
      <a href="#source" class="hover:text-indigo-500">Source Code</a>
      <a href="#tools" class="hover:text-indigo-500">Tools</a>
      <a href="#webapp" class="hover:text-indigo-500">Web App</a>
      <a href="#android" class="hover:text-indigo-500">Android</a>
      <a href="#about" class="hover:text-indigo-500">About</a>
      <button onclick="toggleDarkMode()" class="ml-4 px-2 py-1 rounded bg-indigo-500 text-white">Dark Mode</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
    <h1 class="text-5xl font-bold mb-4">Welcome to Xel-Edu</h1>
    <p class="text-xl">Futuristic Learning Platform for Developers</p>
  </section>

  <!-- Academic Section -->
  <section id="academic" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">Academic</h2>
    <p>Free learning materials and resources for developers.</p>
  </section>

  <!-- Source Code -->
  <section id="source" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">Source Code</h2>
    <p>Ready-to-use code examples with copy features.</p>
  </section>

  <!-- Tools -->
  <section id="tools" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">Tools</h2>
    <p>Free and useful tools for developers and students.</p>
  </section>

  <!-- Web App -->
  <section id="webapp" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">Web App</h2>
    <p>Premium Web App products you can explore and buy.</p>
  </section>

  <!-- Android -->
  <section id="android" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">Android</h2>
    <p>Premium Android apps and tools available for purchase.</p>
  </section>

  <!-- About -->
  <section id="about" class="p-12">
    <h2 class="text-3xl font-semibold mb-4">About Xel-Edu</h2>
    <p>Empowering future developers with futuristic learning tools.</p>
  </section>

  <!-- Checkout Page -->
  <section class="p-12 bg-gray-50 dark:bg-gray-800">
    <h2 class="text-3xl font-semibold mb-4">Checkout</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Full Name" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <input type="file" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <button class="px-4 py-2 bg-indigo-600 text-white rounded">Submit Payment Proof</button>
    </form>
  </section>

  <!-- User Profile Page -->
  <section class="p-12">
    <h2 class="text-3xl font-semibold mb-4">User Profile</h2>
    <form class="space-y-4">
      <input type="email" placeholder="Change Email" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <input type="password" placeholder="New Password" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <button class="px-4 py-2 bg-indigo-600 text-white rounded">Update Profile</button>
    </form>
  </section>

  <!-- Admin Dashboard -->
  <section class="p-12 bg-gray-100 dark:bg-gray-900">
    <h2 class="text-3xl font-semibold mb-4">Admin Dashboard</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Product Name" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <textarea placeholder="Description" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700"></textarea>
      <input type="number" placeholder="Price" class="w-full px-4 py-2 rounded bg-white dark:bg-gray-700" />
      <button class="px-4 py-2 bg-green-600 text-white rounded">Add Product</button>
    </form>
  </section>

  <!-- Floating Assistant -->
  <div class="floating-assistant">
    🤖 Skay
  </div>
</body>
</html>
