'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plan: 'starter',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('감사합니다! 빠른 시일 내에 답변 드리겠습니다.')
    setFormData({ name: '', email: '', company: '', plan: 'starter', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-black pt-24">
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-emerald tracking-widest uppercase">Contact</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 tracking-tight">
            Get in touch
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            AI 플랫폼에 대해 궁금한 점이 있으시면 언제든 문의하세요.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white mb-6 font-mono">{'// Contact info'}</h2>
                <div className="space-y-5">
                  {[
                    { label: 'Email', values: ['contact@neuralx.io', 'support@neuralx.io'] },
                    { label: 'Phone', values: ['02-1234-5678', '평일 09:00-18:00 KST'] },
                    { label: 'Office', values: ['서울특별시 강남구', '테헤란로 123, 10층'] },
                  ].map((info) => (
                    <div key={info.label} className="border border-white/5 rounded-lg p-4">
                      <div className="font-mono text-xs text-emerald mb-2">{info.label}</div>
                      {info.values.map((v) => (
                        <div key={v} className="text-sm text-slate-400">{v}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/5 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-white mb-2 font-mono">Enterprise 문의</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  대규모 조직을 위한 맞춤형 솔루션이 필요하시면 영업팀에 직접 문의하세요.
                </p>
                <Link href="/pricing" className="text-sm font-mono text-emerald hover:text-emerald-light transition-colors">
                  $ view-pricing →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500">contact-form.tsx</span>
                </div>
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1.5 font-mono">name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald/50 transition-colors"
                          placeholder="이름"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1.5 font-mono">email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald/50 transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1.5 font-mono">company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald/50 transition-colors"
                          placeholder="회사명"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1.5 font-mono">plan</label>
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleChange}
                          className="w-full bg-black border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-emerald/50 transition-colors"
                        >
                          <option value="starter">starter</option>
                          <option value="scale">scale</option>
                          <option value="enterprise">enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-slate-500 mb-1.5 font-mono">message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-black border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white font-mono placeholder-slate-600 focus:outline-none focus:border-emerald/50 transition-colors resize-none"
                        placeholder="프로젝트에 대해 알려주세요..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald hover:bg-emerald-light text-black font-mono font-semibold py-3 rounded-md transition-all text-sm"
                    >
                      $ send-message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
