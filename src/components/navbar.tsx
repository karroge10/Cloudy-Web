'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogoClick = () => {
    setIsMenuOpen(false)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link 
        href="/#features" 
        onClick={() => setIsMenuOpen(false)}
        className={`${mobile ? 'text-lg py-2' : ''} hover:text-primary transition-colors`}
      >
        Features
      </Link>
      <Link 
        href="/#about" 
        onClick={() => setIsMenuOpen(false)}
        className={`${mobile ? 'text-lg py-2' : ''} hover:text-primary transition-colors`}
      >
        About
      </Link>
      <Link 
        href="/feedback" 
        onClick={() => setIsMenuOpen(false)}
        className={`${mobile ? 'text-lg py-2' : ''} hover:text-primary transition-colors`}
      >
        Support
      </Link>
    </>
  )

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-orange-100/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={handleLogoClick} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform flex-shrink-0">
              <Image src="/images/icon.png" alt="Cloudy" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">Cloudy</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-600">
            <NavLinks />
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-200 transition-all transform active:scale-95 hidden sm:block cursor-pointer"
            >
              Download
            </Link>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-600 cursor-pointer active:scale-95 p-2 rounded-xl hover:bg-orange-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md pt-24 px-6">
          <div className="flex flex-col space-y-6 font-bold text-gray-600">
            <NavLinks mobile />
            <Link 
              href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-2xl font-bold text-center shadow-xl shadow-orange-200 transition-all active:scale-95 cursor-pointer mt-4"
            >
              Download Cloudy
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
