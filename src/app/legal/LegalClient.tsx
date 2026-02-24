'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export function LegalClient() {
  const [activeSection, setActiveSection] = useState('privacy')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const sections = ['privacy', 'terms', 'cookies']
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <aside className="md:col-span-3 lg:col-span-3">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-orange-50">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Legal Documents</h3>
                <nav className="flex flex-col space-y-1">
                  {[
                    { id: 'privacy', label: 'Privacy Policy' },
                    { id: 'terms', label: 'Terms of Service' },
                    { id: 'cookies', label: 'Cookie Policy' }
                  ].map((item) => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`} 
                      className={`px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                        activeSection === item.id 
                          ? 'bg-orange-50 text-primary shadow-sm ring-1 ring-orange-100' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <span>{item.label}</span>
                      {activeSection === item.id && (
                        <span className="material-icons text-primary text-xs">chevron_right</span>
                      )}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-2">Last updated</p>
                  <p className="text-sm font-semibold text-gray-700">February 24, 2026</p>
                </div>
              </div>
            </aside>
            
            <div className="md:col-span-9 lg:col-span-8 space-y-16">
              {/* Privacy Policy Section */}
              <section id="privacy" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-50 scroll-mt-28 transition-all hover:shadow-md">
                <div className="prose-legal max-w-none">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-nunito">Privacy Policy</h1>
                  <p className="text-lg text-gray-500 font-nunito mb-8">Last Updated: February 24, 2026</p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    Welcome to Cloudy. We are committed to protecting your personal information and your right to privacy.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    <li><strong>Profile Information:</strong> Name, age, gender, and country (if provided).</li>
                    <li><strong>Journal Entries:</strong> Your text entries are stored in our secure database.</li>
                    <li><strong>Biometric Data:</strong> We do NOT collect or store your biometric data. FaceID/Fingerprint authentication is handled entirely by your device&apos;s operating system.</li>
                    <li><strong>Authentication:</strong> We use Google Sign-In and anonymous authentication via Supabase.</li>
                  </ul>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
                  <p className="text-gray-600 mb-4">
                    Your data is used solely to provide and improve the Cloudy experience, including streak tracking and daily reminders. We do NOT sell your data to third parties.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement industry-standard security measures to protect your data. Your memories are your own.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Deletion</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to delete your account and all associated data at any time through the &quot;Delete Account&quot; option in the Profile settings. <strong>To delete your data via email, contact me at <a href="mailto:egorkabantsov@gmail.com" className="text-primary hover:underline">egorkabantsov@gmail.com</a>.</strong>
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                  </p>
                </div>
              </section>
              
              {/* Terms of Service Section */}
              <section id="terms" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-50 scroll-mt-28 transition-all hover:shadow-md">
                <div className="prose-legal max-w-none">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-nunito">Terms of Service</h1>
                  <p className="text-lg text-gray-500 font-nunito mb-8">Last Updated: February 24, 2026</p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By using Cloudy, you agree to be bound by these terms.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. User Content</h2>
                  <p className="text-gray-600 mb-4">
                    You are responsible for the content you post in your journal. We do not claim ownership of your content.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Your use of Cloudy is also governed by our Privacy Policy.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Prohibited Uses</h2>
                  <p className="text-gray-600 mb-4">
                    You agree not to use the app for any illegal or unauthorized purpose.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Termination</h2>
                  <p className="text-gray-600 mb-4">
                    We reserve the right to terminate or suspend your access to the app at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the app, us, or third parties, or for any other reason.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    Cloudy is provided &quot;as is&quot; without any warranties. We are not liable for any damages arising out of your use of the app.
                  </p>
                </div>
              </section>
              
              {/* Cookie Policy Section */}
              <section id="cookies" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-50 scroll-mt-28 transition-all hover:shadow-md">
                <div className="prose-legal max-w-none">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 font-nunito">Cookie Policy</h1>
                  <p className="text-lg text-gray-500 font-nunito mb-8">Last Updated: February 24, 2026</p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files stored on your device that help us provide a better experience.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies to remember your preferences, keep you signed in, and understand how you use our app. This helps us improve Cloudy for everyone.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Your Choices</h2>
                  <p className="text-gray-600 mb-4">
                    You can disable cookies in your browser settings. Note that some features may not work properly if cookies are disabled.
                  </p>
                  
                  <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
                  <p className="text-gray-600 mb-4">
                    We use third-party services (like analytics) that may set their own cookies. These are governed by their respective privacy policies.
                  </p>
                </div>
              </section>
              
              {/* Premium Questions Card */}
              <div className="relative group p-10 rounded-[40px] bg-white/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-primary/20"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 border border-primary/20 relative animate-fade-in group-hover:scale-110 transition-transform">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="material-icons text-primary text-3xl">help_outline</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions?</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                    If you have any questions or concerns about our policies, feel free to reach out. We&apos;re here to help!
                  </p>
                  
                  <Link href="/feedback" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-orange-100 transform active:scale-95">
                    Contact Us <span className="material-icons">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
