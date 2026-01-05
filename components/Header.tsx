'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Demo', href: '/demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/98 shadow-lg shadow-purple-500/30 border-b border-purple-500/40'
            : 'bg-black/95 border-b border-purple-500/20'
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-gradient flex items-center gap-2 z-60"
            >
              <span className="text-2xl drop-shadow-glow">🚀</span>
              TechCorp
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Start Free Trial
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-60"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded transition-all duration-300 my-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ top: '80px' }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/98 backdrop-blur-xl"
            onClick={toggleMenu}
          />

          {/* Menu Content */}
          <div className="relative max-w-7xl mx-auto px-6 py-8">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-4 py-4 text-2xl font-semibold text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 rounded-lg transition-all border-b border-purple-500/10"
                  style={{
                    animation: `slideIn 0.3s ease ${index * 0.05}s both`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="mt-8 block w-full text-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              style={{
                animation: 'slideIn 0.3s ease 0.25s both',
              }}
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
