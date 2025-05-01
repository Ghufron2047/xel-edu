"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Academic", href: "/academic" },
  { name: "Source Code", href: "/source-code" },
  { name: "Tools", href: "/tools" },
  { name: "Web App", href: "/web-app" },
  { name: "Android", href: "/android" },
  { name: "About", href: "/about" },
  { name: "Checkout", href: "/checkout" },
  { name: "Profile", href: "/profile" },
  { name: "Admin", href: "/admin" },
  { name: "Transaksi", href: "/transaksi" },
  { name: "History", href: "/history" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Xel-Edu</h1>
      <div className="flex flex-wrap gap-4 mt-2">
        {menuItems.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={`hover:text-blue-500 transition-colors ${
              pathname === href ? "font-semibold text-blue-500" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}