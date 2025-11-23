"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: "ri-home-line" },
    { href: "/expertise", label: "Expertise", icon: "ri-lightbulb-line" },
    { href: "/projects", label: "Projects", icon: "ri-folder-line" },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <nav className="px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* === Logo Section === */}
            <Link href="/" className="flex items-center gap-2 cursor-pointer group">
              <span className="text-xl font-['Pacifico'] text-blue-600 group-hover:text-blue-700 transition-colors">
                Abdul Aziz
              </span>
              <span className="hidden sm:inline-block text-xs text-gray-500 font-normal">
                AI Engineer
              </span>
            </Link>

            {/* === Desktop Navigation === */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 cursor-pointer text-sm">
                  <i className={`${link.icon} text-base`}></i>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-md text-sm">
                Let's Connect
              </Link>
            </div>

            {/* === Mobile Menu Button === */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle mobile menu">
                <i className={`${isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"} text-xl`}></i>
              </button>
            </div>
          </div>

          {/* === Mobile Navigation === */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 border-t border-gray-100 pt-3">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-2 cursor-pointer px-2 py-1.5 hover:bg-gray-50 rounded-lg text-sm">
                    <i className={`${link.icon} text-lg`}></i>
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-blue-600 text-white px-4 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer text-center shadow-md mt-1 text-sm">
                  Let's Connect
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}