"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fonction pour savoir si le lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Topbar */}
      <div className="bg-[#EEEEEE] text-xs md:text-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4 md:space-x-6">
            <Link href="/help" className="text-gray-600 hover:text-gray-900">
              Assistance
            </Link>
            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">+225 071 382 2051</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Fr</span>
          </div>
        </div>
      </div>

      {/* Basebar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo mobile */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              KIM
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo desktop */}
          <div className="hidden md:block">
            <Link href="/" className="text-2xl font-bold  text-orange-600">
              KIM
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`font-medium hover:text-orange-600 ${
                isActive("/") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/shop"
              className={`font-medium hover:text-orange-600 ${
                isActive("/shop") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Boutique
            </Link>
            <Link
              href="/deals"
              className={`font-medium hover:text-orange-600 ${
                isActive("/deals") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Offres
            </Link>
            <Link
              href="/blog"
              className={`font-medium hover:text-orange-600 ${
                isActive("/blog") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Icônes */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-gray-800 hover:text-orange-600">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-gray-800 hover:text-orange-600 relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-gray-800 hover:text-orange-600">
              <FiUser className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t mt-4">
            <Link
              href="/"
              className={`block font-medium hover:text-orange-600 ${
                isActive("/") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/shop"
              className={`block font-medium hover:text-orange-600 ${
                isActive("/shop") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Boutique
            </Link>
            <Link
              href="/deals"
              className={`block font-medium hover:text-orange-600 ${
                isActive("/deals") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Offres
            </Link>
            <Link
              href="/blog"
              className={`block font-medium hover:text-orange-600 ${
                isActive("/blog") ? "text-orange-600 font-bold" : "text-gray-800"
              }`}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
