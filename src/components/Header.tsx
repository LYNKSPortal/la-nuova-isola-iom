'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#7A2325] shadow-sm sticky top-0 z-50" role="banner">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center py-2 md:py-3">
          {/* Logo */}
          <FadeIn duration={0.5}>
            <div className="flex items-center">
              <Link href="/" className="flex items-center py-2 md:py-4" aria-label="La Nuova Isola - Home">
                <img 
                  src="/white-logo.png" 
                  alt="La Nuova Isola Restaurant Logo" 
                  className="w-32 sm:w-40 md:w-44 lg:w-48 h-auto"
                  width="200"
                  height="auto"
                />
              </Link>
            </div>
          </FadeIn>

          {/* Desktop Navigation */}
          <FadeIn delay={0.2} duration={0.5}>
            <nav className="hidden lg:block" role="navigation" aria-label="Main navigation">
              <ul className="flex items-center space-x-4 xl:space-x-6">
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
                {/* Book Now Button */}
                <Link 
                  href="/reservations" 
                  className="bg-white text-[#7A2325] px-6 py-2 hover:bg-gray-100 transition-colors font-medium"
                  aria-label="Make a reservation now"
                >
                  Book Now
                </Link>
              </li>
            </ul>
            </nav>
          </FadeIn>

          {/* Mobile menu button */}
          <FadeIn delay={0.2} duration={0.5}>
            <div className="lg:hidden">
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
          </FadeIn>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden bg-[#7A2325] border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-1 pb-2 space-y-0.5">
              <ul className="space-y-0.5">
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
              </ul>
              <div className="pt-2 pb-2 border-t border-white/20 mt-1">
                <Link
                  href="/reservations"
                  className="block w-full bg-white text-[#7A2325] px-6 py-2.5 hover:bg-gray-100 transition-colors font-medium text-center"
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
