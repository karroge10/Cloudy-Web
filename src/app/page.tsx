'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChevronLeft, ChevronRight, Shield, Flame, PawPrint, Check } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const screenshots = [
    '/images/screenshotMain.png',
    '/images/screenshotInspector.png',
    '/images/screenshotMascots.png',
    '/images/screenshotProfile.png',
    '/images/screenshotProgress.png',
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }, [screenshots.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }, [screenshots.length])

  // Handle Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  useEffect(() => {
    if (screenshots.length <= 1) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, screenshots.length])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-[calc(100svh-80px)] md:min-h-[600px] flex flex-col items-center justify-center py-4 md:py-12 lg:py-16 px-6 overflow-hidden relative">
          <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-12 items-center justify-center w-full relative z-10 flex-1">
            {/* Mobile Pill (Only visible on mobile, above screenshot) */}
            <div className="lg:hidden animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-md leading-none flex items-center justify-center">NEW</span>
                <span className="text-sm font-medium text-gray-600">Cloudy is now live on Android</span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-8 animate-fade-in lg:pr-10 order-2 lg:order-1 text-center lg:text-left w-full mt-auto mb-4 md:mb-0">
              <div className="hidden lg:inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-md leading-none flex items-center justify-center">NEW</span>
                <span className="text-sm font-medium text-gray-600">Cloudy is now live on Android</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Start your daily gratitude habit
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your peaceful companion for daily mindfulness. Built with love to help you focus on the good stuff.
              </p>
              <div className="flex flex-col gap-3 pt-2 items-center lg:items-start w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
                    target="_blank"
                    className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-200 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer w-full"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.523 15.3414C18.173 15.3414 18.701 14.8134 18.701 14.1634..." className="hidden" /> {/* Old path placeholder */}
                      <path d="M3 20.5V3.5C3 2.9 3.2 2.4 3.7 2.1L12.5 12L3.7 21.9C3.2 21.6 3 21.1 3 20.5Z" fill="#00E5FF"/>
                      <path d="M17.4 14.8L12.5 12L3.7 21.9C4 22.1 4.5 22.2 5 21.9L17.4 14.8Z" fill="#FF3D00"/>
                      <path d="M21 12.7C21.4 12.4 21.4 11.6 21 11.3L17.4 9.2L12.5 12L17.4 14.8L21 12.7Z" fill="#FFC107"/>
                      <path d="M17.4 9.2L5 2.1C4.5 1.8 4 1.9 3.7 2.1L12.5 12L17.4 9.2Z" fill="#4CAF50"/>
                    </svg>
                    Download on Play Store
                  </Link>
                </div>
                <p className="text-sm text-gray-400">
                  Cloudy is completely free. No hidden fees.
                </p>
              </div>
            </div>

            {/* App Preview Carousel */}
            <div
              className="relative group flex items-center justify-center animate-fade-in order-1 lg:order-2 w-full -mt-2 lg:mt-0 flex-1"
              style={{ animationDelay: '0.2s' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full max-w-[min(160px,25vh)] md:max-w-[min(240px,30vh)] xl:max-w-[min(300px,35vh)] flex flex-col items-center">
                <div className="relative w-full aspect-[9/18.5] flex items-center justify-center overflow-visible">
                  {screenshots.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`Cloudy App Screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-[-40px] md:left-[-60px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-800 transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-orange-50 active:scale-95 z-30"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-[-40px] md:right-[-60px] top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-800 transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-orange-50 active:scale-95 z-30"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <div className="flex gap-2 mt-6 md:mt-8 z-20">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all cursor-pointer active:scale-90 ${index === currentSlide ? 'bg-primary w-4 md:w-6' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white border-t border-orange-50" id="features">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Why Cloudy?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">The most peaceful workflow imaginable.</h2>
              <p className="text-gray-600 text-lg">Built so you&apos;ll actually want to open it and track your daily moments of joy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Privacy & Encryption Card */}
              <div className="bg-background rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">Privacy & Encryption</h3>
                </div>
                <div className="relative h-48 mb-6 bg-white rounded-2xl overflow-hidden border border-orange-50 flex items-center justify-center">
                  <div className="w-28 h-28 relative">
                    <Image src="/images/mascot_lock.png" alt="Privacy Mascot" fill className="object-contain drop-shadow-sm" />
                    <div className="absolute top-0 right-0 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Your journal is for your eyes only. Secure, local-first data ensures total peace of mind.</p>
              </div>

              {/* Track Progress Card */}
              <div className="bg-background rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Flame className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">Track Progress</h3>
                </div>
                <div className="relative h-48 mb-6 bg-white rounded-2xl p-4 border border-orange-50 flex flex-col items-center justify-center">
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(21)].map((_, i) => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${i % 7 === 0 ? 'bg-orange-200' : i % 3 === 0 ? 'bg-orange-400' : i % 5 === 0 ? 'bg-orange-500' : 'bg-orange-300'}`}></div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 bg-background px-4 py-1.5 rounded-full shadow-sm border border-orange-100">
                    <Flame className="w-4 h-4 text-primary relative -top-px" strokeWidth={3} aria-hidden="true" />
                    <span className="text-sm font-black text-gray-900">12 Days Streak</span>
                  </div>
                </div>
                <p className="text-gray-600">Visualize your consistency with beautiful heatmaps and streaks. Keep the fire burning!</p>
              </div>

              {/* Meet Companions Card */}
              <div className="bg-background rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <PawPrint className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">Meet Companions</h3>
                </div>
                <div className="relative h-48 mb-6 bg-white rounded-2xl overflow-hidden border border-orange-50 flex items-center justify-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image src="/images/mascot_farmer.png" alt="Farmer companion" fill className="object-contain" />
                  </div>
                  <div className="w-16 h-16 relative">
                    <Image src="/images/mascot_wizard.png" alt="Wizard companion" fill className="object-contain" />
                  </div>
                  <div className="w-16 h-16 relative">
                    <Image src="/images/mascot_rock.png" alt="Rock companion" fill className="object-contain" />
                  </div>
                </div>
                <p className="text-gray-600">Unlock adorable companions as you grow. From Cloudy to Wizard, collect them all!</p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Creator Section */}
        <section className="py-20 md:py-24 bg-background" id="about">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-orange-100 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="flex-1 space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Hey, I&apos;m Egor</h2>
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    I built Cloudy because I realized my phone had become a source of noise, not reflection. Most apps are designed to keep you scrolling. Cloudy is designed to help you stop and breathe.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Writing just one thing a day changed my perspective, and I built this so it could do the same for you. If it helps you even a little, I’d love to hear your story.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-orange-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative border border-orange-100 flex-shrink-0">
                      <Image src="/images/creator.png" alt="Egor" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Egor</p>
                      <p className="text-xs text-gray-500">Solo Developer</p>
                    </div>
                  </div>

                  <div className="hidden sm:block h-8 w-px bg-orange-100"></div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-sm">
                      <Image src="/images/icon.png" alt="Cloudy" fill className="object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">Cloudy</p>
                      <p className="text-xs text-gray-500">Chief Happiness Officer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-orange-50 rounded-full flex items-center justify-center relative overflow-visible flex-shrink-0">
                  <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="w-32 h-32 md:w-48 md:h-48 relative drop-shadow-xl hover:scale-110 transition-transform duration-500">
                    <Image src="/images/mascot_hello.png" alt="Cloudy Mascot" fill className="object-contain" />
                  </div>
                  <Link
                    href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
                    target="_blank"
                    className="absolute -bottom-2 md:-bottom-2 -right-2 md:-right-2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl shadow-lg border border-orange-100 cursor-pointer active:scale-95 transition-transform hover:scale-105 z-10"
                  >
                    <span className="text-xs md:text-sm font-bold text-primary whitespace-nowrap">Start your journey!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
