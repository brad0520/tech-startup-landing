'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [stats, setStats] = useState({ users: 0, uptime: 0, countries: 0 })

  useEffect(() => {
    const targets = { users: 10000, uptime: 99, countries: 150 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      if (step <= steps) {
        setStats({
          users: Math.floor((targets.users / steps) * step),
          uptime: Math.floor((targets.uptime / steps) * step),
          countries: Math.floor((targets.countries / steps) * step),
        })
      } else {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full text-sm text-purple-300">
                🏆 2024년 혁신 스타트업 어워드 수상
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              미래를 만드는
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI 솔루션
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              최첨단 인공지능 기술로 비즈니스의 한계를 뛰어넘는
              혁신적인 솔루션을 제공합니다
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                무료 체험하기
              </a>
              <a
                href="#features"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                제품 둘러보기
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stats.users.toLocaleString()}
                  <span className="text-purple-400">+</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">활성 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stats.uptime}
                  <span className="text-cyan-400">%</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">가동률</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stats.countries}
                  <span className="text-emerald-400">+</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">국가</div>
              </div>
            </div>
          </div>

          {/* Right: Floating Cards */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: '🤖', title: 'AI 자동화', desc: '스마트 워크플로우' },
                  { icon: '⚡', title: '실시간 분석', desc: '즉시 인사이트 도출' },
                  { icon: '🛡️', title: '보안 강화', desc: '엔터프라이즈급' },
                  { icon: '🚀', title: '빠른 배포', desc: '원클릭 설치' },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:scale-105 hover:border-purple-500/30 cursor-pointer"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <div className="text-white font-semibold text-lg mb-1">
                      {card.title}
                    </div>
                    <div className="text-gray-400 text-sm">{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
