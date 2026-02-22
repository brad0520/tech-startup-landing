'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const terminalLines = [
  { type: 'input', text: '$ neuralx auth login --api-key nx_sk_...' },
  { type: 'output', text: '✓ Authenticated as team@company.com' },
  { type: 'input', text: '$ neuralx models list' },
  { type: 'output', text: '┌──────────────────────┬──────────┬─────────┐' },
  { type: 'output', text: '│ Model                │ Status   │ Latency │' },
  { type: 'output', text: '├──────────────────────┼──────────┼─────────┤' },
  { type: 'output', text: '│ revenue-forecast-v3  │ active   │ 8ms     │' },
  { type: 'output', text: '│ churn-predictor-v2   │ active   │ 12ms    │' },
  { type: 'output', text: '│ sentiment-analyzer   │ active   │ 15ms    │' },
  { type: 'output', text: '│ image-classifier-v1  │ standby  │ —       │' },
  { type: 'output', text: '└──────────────────────┴──────────┴─────────┘' },
  { type: 'input', text: '$ neuralx infer revenue-forecast-v3 --input "2026 Q3 sales data"' },
  { type: 'output', text: '⠋ Running inference...' },
  { type: 'output', text: '✓ Prediction complete (8ms)' },
  { type: 'output', text: '' },
  { type: 'output', text: '  Revenue Forecast: ₩2.4B (+23% YoY)' },
  { type: 'output', text: '  Confidence: 94.2%' },
  { type: 'output', text: '  Key Factors: seasonal_trend (0.42), marketing_spend (0.31)' },
]

const useCases = [
  { title: '매출 예측 분석', desc: '과거 매출 데이터와 시장 트렌드를 분석하여 미래 매출을 예측합니다.', icon: '📊' },
  { title: '고객 이탈 예측', desc: '고객 행동 패턴을 분석하여 이탈 가능성이 높은 고객을 사전에 식별합니다.', icon: '🎯' },
  { title: '실시간 이상 탐지', desc: '거래 데이터를 실시간으로 분석하여 이상 패턴을 즉시 감지하고 알림합니다.', icon: '🔍' },
  { title: '자연어 처리', desc: '고객 리뷰, 문의, SNS 데이터를 분석하여 감성과 주제를 자동 분류합니다.', icon: '💬' },
]

export default function DemoPage() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [started, setStarted] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    if (terminalRef.current) observer.observe(terminalRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || visibleLines >= terminalLines.length) return
    const delay = terminalLines[visibleLines]?.type === 'input' ? 800 : 150
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay)
    return () => clearTimeout(timer)
  }, [started, visibleLines])

  return (
    <main className="min-h-screen bg-black pt-24">
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-emerald tracking-widest uppercase">Live Demo</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 tracking-tight">
            See it in action
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            NeuralX CLI를 통해 모델 배포부터 추론까지 실시간으로 체험해 보세요.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={terminalRef} className="terminal-window glow-border">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-500">neuralx-demo — zsh — 120×40</span>
            </div>
            <div className="p-5 font-mono text-sm leading-loose min-h-[400px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className={line.type === 'input' ? 'text-white mt-3 first:mt-0' : 'text-slate-400'}>
                  {line.text === '' ? <br /> : line.text}
                </div>
              ))}
              <div className="flex items-center gap-1 mt-2">
                <span className="text-emerald">$</span>
                <span className="cursor-blink text-emerald">▌</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => { setVisibleLines(0); setStarted(false); setTimeout(() => setStarted(true), 100) }}
              className="font-mono text-xs text-slate-500 hover:text-emerald border border-white/10 px-4 py-2 rounded-md transition-colors"
            >
              ↻ Replay demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-emerald tracking-widest uppercase">Use Cases</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-4 tracking-tight">
              다양한 비즈니스에 적용 가능
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="border border-white/5 rounded-xl p-6 hover:border-emerald/20 transition-all group">
                <div className="text-3xl mb-4">{uc.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald transition-colors">{uc.title}</h3>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white tracking-tight">직접 사용해 보세요</h2>
          <p className="mt-4 text-slate-400 font-mono text-sm">가입 후 즉시 사용 가능합니다. 신용카드 불필요.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/contact" className="font-mono text-sm bg-emerald hover:bg-emerald-light text-black font-semibold px-8 py-3 rounded-md transition-all">
              $ get-started
            </Link>
            <Link href="/pricing" className="font-mono text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 px-8 py-3 rounded-md transition-all">
              $ view-pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
