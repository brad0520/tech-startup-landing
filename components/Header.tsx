'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            ? 'bg-black/90 border-b border-white/5'
            : 'bg-transparent border-b border-transparent'
        } backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 z-[60]">
              <span className="font-mono text-lg font-bold text-white tracking-tight">
                Neural<span className="text-emerald">X</span>
                <span className="cursor-blink text-emerald">_</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-mono text-slate-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/demo"
                className="text-sm font-mono text-slate-400 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="text-sm font-mono bg-emerald hover:bg-emerald-light text-black font-semibold px-5 py-2 rounded-md transition-all"
              >
                Get Started
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[60]"
              aria-label="메뉴 열기"
            >
              <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '64px' }}>
          <div className="absolute inset-0 bg-black/98 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
          <div className="relative max-w-7xl mx-auto px-6 py-6">
            <nav className="space-y-1">
              {[{ name: 'Home', href: '/' }, ...navItems].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-mono text-slate-300 hover:text-emerald border-b border-white/5 transition-colors"
                >
                  <span className="text-emerald mr-2">$</span>{item.name.toLowerCase()}
                </Link>
              ))}
            </nav>
            <div className="mt-6 px-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-emerald hover:bg-emerald-light text-black px-6 py-3 rounded-md font-mono font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
