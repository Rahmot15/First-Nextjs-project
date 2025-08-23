"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            MyShop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
          </div>

          <button
            onClick={() => signIn()}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
          >
            Login
          </button>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          <Link href="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/products" className="block hover:text-gray-300">
            Products
          </Link>
          <Link href="/login" className="block hover:text-gray-300">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
