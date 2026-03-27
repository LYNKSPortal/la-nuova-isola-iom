'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#7A2325] shadow-sm" role="banner">
      <div className="px-[20px] sm:px-[20px] md:px-[50px] lg:px-[50px] xl:px-[50px]">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center py-[20px]" aria-label="La Nuova Isola - Home">
              <img 
                src="/white-logo.png" 
                alt="La Nuova Isola Restaurant Logo" 
                className="w-[200px] h-auto"
                width="200"
                height="auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                {/* Book Now Button */}
                <Link 
                  href="/reservations" 
                  className="bg-white text-[#7A2325] px-6 py-2 hover:bg-gray-200 transition-colors font-medium"
                  aria-label="Make a reservation now"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-[#7A2325] border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/menu"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reservations"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="pt-4 pb-3 border-t border-white/20">
                <Link
                  href="/reservations"
                  className="block w-full bg-white text-[#7A2325] px-6 py-3 hover:bg-gray-200 transition-colors font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Make a reservation now"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
