'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            궁금하신 점이 있으신가요? 언제든지 연락주세요
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                연락처 정보
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">이메일</h3>
                    <p className="text-gray-300">contact@techcorp.com</p>
                    <p className="text-gray-300">support@techcorp.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">전화</h3>
                    <p className="text-gray-300">02-1234-5678</p>
                    <p className="text-gray-400 text-sm">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">주소</h3>
                    <p className="text-gray-300">
                      서울특별시 강남구 테헤란로 123<br />
                      테크빌딩 10층
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">소셜 미디어</h3>
                    <div className="flex space-x-4 mt-2">
                      {['🐦', '💼', '📘', '📸'].map((icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-2xl hover:scale-110 transition-transform"
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl p-4 h-64 flex items-center justify-center">
                <p className="text-gray-400">🗺️ Google Maps</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                메시지 보내기
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="테크코프"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="문의하실 내용을 입력해주세요..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  메시지 전송
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
