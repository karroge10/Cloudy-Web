import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FeedbackForm } from '@/components/feedback-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Support - Cloudy",
  description: "Help us make Cloudy better. Send us your thoughts and suggestions.",
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-2xl w-full relative z-10 animate-fade-in py-12">
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Tell us <span className="text-primary">what you think.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
              Have a feature request? Found a bug? We read everything and try to reply as fast as possible.
            </p>
          </div>
          
          <FeedbackForm />

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <span className="material-icons text-sm">security</span>
              Your data is encrypted and handled with care. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
