'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#about', label: 'About' },
  { href: '/feedback', label: 'Support' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-orange-100/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 min-w-[40px] aspect-square rounded-full bg-white flex items-center justify-center shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform flex-shrink-0">
              <Image src="/images/icon.png" alt="Cloudy" fill sizes="40px" className="object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Cloudy</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-600">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
              target="_blank"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-200 transition-all transform active:scale-95 hidden sm:flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5C3 2.9 3.2 2.4 3.7 2.1L12.5 12L3.7 21.9C3.2 21.6 3 21.1 3 20.5Z" fill="#00E5FF"/>
                <path d="M17.4 14.8L12.5 12L3.7 21.9C4 22.1 4.5 22.2 5 21.9L17.4 14.8Z" fill="#FF3D00"/>
                <path d="M21 12.7C21.4 12.4 21.4 11.6 21 11.3L17.4 9.2L12.5 12L17.4 14.8L21 12.7Z" fill="#FFC107"/>
                <path d="M17.4 9.2L5 2.1C4.5 1.8 4 1.9 3.7 2.1L12.5 12L17.4 9.2Z" fill="#4CAF50"/>
              </svg>
              Download
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 cursor-pointer active:scale-95 p-2 rounded-xl hover:bg-orange-50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md pt-24 px-6">
          <div className="flex flex-col space-y-6 font-bold text-gray-600">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg py-2 hover:text-primary transition-colors"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
              target="_blank"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-orange-200 transition-all active:scale-95 cursor-pointer mt-4"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5C3 2.9 3.2 2.4 3.7 2.1L12.5 12L3.7 21.9C3.2 21.6 3 21.1 3 20.5Z" fill="#00E5FF"/>
                <path d="M17.4 14.8L12.5 12L3.7 21.9C4 22.1 4.5 22.2 5 21.9L17.4 14.8Z" fill="#FF3D00"/>
                <path d="M21 12.7C21.4 12.4 21.4 11.6 21 11.3L17.4 9.2L12.5 12L17.4 14.8L21 12.7Z" fill="#FFC107"/>
                <path d="M17.4 9.2L5 2.1C4.5 1.8 4 1.9 3.7 2.1L12.5 12L17.4 9.2Z" fill="#4CAF50"/>
              </svg>
              Download Cloudy
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
