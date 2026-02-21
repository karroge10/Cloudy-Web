'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <footer className="bg-white border-t border-orange-50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-2">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <Image src="/images/icon.png" alt="Cloudy" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-gray-900">Cloudy</span>
            </button>
            <p className="text-gray-500 mb-6 max-w-sm">
              Your peaceful companion for daily mindfulness. Built with love to help you focus on the good stuff.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/feedback" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link href="https://play.google.com/store/apps/details?id=app.cloudy.journal" className="hover:text-primary transition-colors">Download</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/legal#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal#terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cloudy App. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            <span>Made with 🧡 by</span>
            <Link href="https://egorkabantsov.vercel.app" className="text-primary font-bold hover:underline">Egor Kabantsov</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
