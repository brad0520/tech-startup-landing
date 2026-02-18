'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
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
            ? 'bg-[#09090b]/95 border-b border-emerald-500/10 shadow-lg shadow-emerald-900/5'
            : 'bg-transparent border-b border-transparent'
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 z-[60]"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Neural<span className="text-emerald-400">X</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/demo"
                className="text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2"
              >
                Log in
              </Link>
              <Link
                href="/contact"
                className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-lg transition-all"
              >
                Get Started
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[60]"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-zinc-300 rounded transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-zinc-300 rounded transition-all duration-300 my-1 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-zinc-300 rounded transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '64px' }}>
          <div
            className="absolute inset-0 bg-[#09090b]/98 backdrop-blur-xl"
            onClick={toggleMenu}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-6">
            <nav className="space-y-1">
              {[{ name: 'Home', href: '/' }, ...navItems].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className="block px-4 py-4 text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  style={{
                    animation: `slideIn 0.3s ease ${index * 0.05}s both`,
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 space-y-3 px-4">
              <Link
                href="/demo"
                onClick={toggleMenu}
                className="block w-full text-center border border-zinc-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-all"
              >
                Log in
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-lg font-medium transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
