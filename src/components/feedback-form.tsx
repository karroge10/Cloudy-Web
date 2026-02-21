'use client'

import { useState, FormEvent } from 'react'
import { supabase } from '@/lib/supabase'
import { Send, CheckCircle2, Mail, MessageSquare } from 'lucide-react'

export function FeedbackForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase
        .from('feedbacks')
        .insert([{ email, message }])

      if (supabaseError) throw supabaseError

      setSuccess(true)
      setEmail('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-white p-12 rounded-3xl border border-orange-100 text-center space-y-6 animate-fade-in shadow-xl">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-primary animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-gray-900">Message Received!</h3>
          <p className="text-gray-500 text-lg">Thank you for helping us make Cloudy better. We appreciate every single message.</p>
        </div>
        <button 
          onClick={() => setSuccess(false)}
          className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-100 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-orange-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center gap-2 text-xs font-bold text-gray-700 ml-1">
            <Mail className="w-3.5 h-3.5 text-primary" />
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@example.com"
            className="w-full bg-orange-50/30 border border-orange-100 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm text-gray-700 hover:bg-white focus:bg-white"
          />
          <p className="text-[10px] text-gray-400 ml-1">
            Don&apos;t worry, we only use your email to reply to your feedback. No spam ever.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="flex items-center gap-2 text-xs font-bold text-gray-700 ml-1">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you love, or what we can do better..."
            className="w-full bg-orange-50/30 border border-orange-100 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm text-gray-700 resize-none hover:bg-white focus:bg-white"
          />
        </div>
        
        {error && <p className="text-red-500 text-xs font-medium animate-shake">{error}</p>}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-3.5 w-3.5 border-2 border-white border-t-transparent"></span>
              Sending...
            </span>
          ) : (
            <>
              <span className="text-base">Send Feedback</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
