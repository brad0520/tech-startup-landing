'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [stats, setStats] = useState({ models: 0, accuracy: 0, latency: 0 })

  useEffect(() => {
    const targets = { models: 500, accuracy: 99, latency: 12 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      if (step <= steps) {
        setStats({
          models: Math.floor((targets.models / steps) * step),
          accuracy: Math.min(Math.floor((targets.accuracy / steps) * step * 10) / 10, targets.accuracy),
          latency: Math.floor((targets.latency / steps) * step),
        })
      } else {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient mesh blobs */}
      <div className="mesh-blob mesh-blob-blue animate-blob w-[500px] h-[500px] -top-20 -right-20 absolute" />
      <div className="mesh-blob mesh-blob-cyan animate-blob-slow w-[400px] h-[400px] bottom-0 left-10 absolute" />
      <div className="mesh-blob mesh-blob-blue animate-blob-slow w-[300px] h-[300px] top-40 left-1/3 absolute" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-medium">퍼블릭 베타 출시</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              AI로 더 스마트하게
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                비즈니스 인텔리전스
              </span>
              <br />
              플랫폼
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              NeuralX는 데이터를 실행 가능한 인사이트로 변환합니다.
              예측 모델을 배포하고, 워크플로우를 자동화하며,
              엔터프라이즈급 AI로 비즈니스를 확장하세요.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
              >
                무료로 시작하기
              </Link>
              <Link
                href="/demo"
                className="border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-all text-sm flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                데모 보기
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                  {stats.models}<span className="text-primary text-lg">+</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">배포된 모델</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                  {stats.accuracy}<span className="text-accent text-lg">%</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">정확도</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">
                  {stats.latency}<span className="text-primary text-lg">ms</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">평균 레이턴시</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full max-w-md">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
                <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-slate-400">NeuralX Dashboard</span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Revenue', value: '2.4B', change: '+23%' },
                      { label: 'Users', value: '12.5K', change: '+8%' },
                      { label: 'Models', value: '342', change: '+15%' },
                    ].map((m, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-3">
                        <div className="text-[10px] text-slate-400 mb-1">{m.label}</div>
                        <div className="text-base font-bold text-slate-900">{m.value}</div>
                        <div className="text-[10px] text-green-600 font-medium">{m.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 h-32 flex items-end justify-between gap-1">
                    {[40, 55, 35, 70, 50, 80, 65, 90, 75, 85, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-blue-400 rounded-t opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    실시간 데이터 - 2초 전 업데이트
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
