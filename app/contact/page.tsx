'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will get back to you shortly.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-[#09090b]">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              AI 플랫폼에 대해 궁금한 점이 있으시면 언제든 문의하세요.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white mb-6">Contact Info</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Email</div>
                      <p className="text-sm text-zinc-400">contact@neuralx.io</p>
                      <p className="text-sm text-zinc-400">support@neuralx.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Phone</div>
                      <p className="text-sm text-zinc-400">02-1234-5678</p>
                      <p className="text-xs text-zinc-500">Mon-Fri 09:00 - 18:00 KST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Office</div>
                      <p className="text-sm text-zinc-400">
                        Seoul, Gangnam-gu<br />
                        Teheran-ro 123, 10F
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-white mb-3">Enterprise Inquiry</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  대규모 조직을 위한 맞춤형 솔루션이 필요하시면 영업팀에 직접 문의하세요.
                  전담 솔루션 엔지니어가 최적의 플랜을 제안해드립니다.
                </p>
                <Link
                  href="/pricing"
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  View pricing plans &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-6">Send a message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-zinc-400 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-medium py-2.5 rounded-lg transition-all text-sm"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500 mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-sm text-zinc-600">Google Maps - Seoul, Gangnam</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
