'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ── Data ─────────────────────────────────────────── */

const stats = [
  { label: 'API Calls / day', value: '2.4B+' },
  { label: 'Avg Latency', value: '12ms' },
  { label: 'Models Deployed', value: '500+' },
  { label: 'Uptime', value: '99.99%' },
]

const features = [
  {
    tag: '01',
    title: '실시간 추론 엔진',
    desc: '수백만 건의 요청을 밀리초 단위로 처리합니다. GPU 클러스터 기반의 분산 추론으로 어떤 규모에서도 일관된 응답 속도를 보장합니다.',
    code: `const result = await neuralx.infer({
  model: "gpt-enterprise-v3",
  input: userData,
  options: { stream: true, maxTokens: 4096 }
});`,
  },
  {
    tag: '02',
    title: '자동화 파이프라인',
    desc: '데이터 수집부터 모델 학습, 배포까지 전체 ML 파이프라인을 코드 한 줄로 자동화합니다. CI/CD와 완벽하게 통합됩니다.',
    code: `neuralx.pipeline("train-deploy")
  .source("s3://data-lake/2026")
  .transform(normalize, augment)
  .train({ epochs: 50, gpu: "A100x4" })
  .deploy({ region: "ap-northeast-2" })
  .run();`,
  },
  {
    tag: '03',
    title: '엔터프라이즈 보안',
    desc: 'SOC2 Type II, ISO 27001 인증. 데이터는 전송 중·저장 시 모두 암호화되며, VPC 내부 배포와 RBAC 접근 제어를 지원합니다.',
    code: `neuralx.security.configure({
  encryption: "AES-256-GCM",
  vpc: { id: "vpc-0a1b2c3d", subnet: "private" },
  rbac: {
    admin: ["deploy", "train", "read"],
    viewer: ["read"]
  }
});`,
  },
]

const comparisons = [
  { feature: '실시간 추론', neuralx: true, a: false, b: true },
  { feature: '자동 스케일링', neuralx: true, a: true, b: false },
  { feature: '커스텀 모델 학습', neuralx: true, a: false, b: false },
  { feature: 'API 호출 무제한', neuralx: true, a: false, b: false },
  { feature: 'VPC 내부 배포', neuralx: true, a: false, b: true },
  { feature: '실시간 모니터링', neuralx: true, a: true, b: false },
  { feature: 'SOC2 / ISO 인증', neuralx: true, a: false, b: false },
  { feature: '99.99% SLA', neuralx: true, a: true, b: true },
]

const logos = [
  'Samsung', 'Naver', 'Kakao', 'LG', 'SK', 'Hyundai',
  'KT', 'Coupang', 'Toss', 'LINE', 'Woowa', 'Krafton',
]

/* ── Component ────────────────────────────────────── */

export default function Home() {
  const revealRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="terminal-scanline" />
        <div className="absolute inset-0 noise-overlay" />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-xs font-mono text-slate-400">v3.0 — Now Generally Available</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[0.95]">
            Build with
            <br />
            <span className="glow-emerald text-emerald">Intelligence</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            NeuralX는 AI 추론, 학습, 배포를 하나의 플랫폼에서 제공합니다.
            <br className="hidden sm:block" />
            엔터프라이즈급 인프라 위에서 더 빠르게 빌드하세요.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="font-mono text-sm bg-emerald hover:bg-emerald-light text-black font-semibold px-8 py-3 rounded-md transition-all"
            >
              $ get-started --free
            </Link>
            <Link
              href="/demo"
              className="font-mono text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 px-8 py-3 rounded-md transition-all"
            >
              $ view-demo
            </Link>
          </div>

          {/* Terminal preview */}
          <div className="mt-16 terminal-window max-w-2xl mx-auto text-left">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-500">neuralx — zsh</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-slate-500">$ npm install @neuralx/sdk</div>
              <div className="mt-2">
                <span className="syntax-keyword">import</span>{' '}
                <span className="text-white">{'{ NeuralX }'}</span>{' '}
                <span className="syntax-keyword">from</span>{' '}
                <span className="syntax-string">&quot;@neuralx/sdk&quot;</span>
              </div>
              <div className="mt-1">
                <span className="syntax-keyword">const</span>{' '}
                <span className="text-white">nx</span>{' '}
                <span className="syntax-operator">=</span>{' '}
                <span className="syntax-keyword">new</span>{' '}
                <span className="syntax-function">NeuralX</span>
                <span className="text-white">(</span>
                <span className="syntax-string">&quot;nx_sk_...&quot;</span>
                <span className="text-white">)</span>
              </div>
              <div className="mt-3">
                <span className="syntax-keyword">const</span>{' '}
                <span className="text-white">response</span>{' '}
                <span className="syntax-operator">=</span>{' '}
                <span className="syntax-keyword">await</span>{' '}
                <span className="text-white">nx.</span>
                <span className="syntax-function">infer</span>
                <span className="text-white">(</span>
                <span className="syntax-string">&quot;비즈니스 매출 예측 분석&quot;</span>
                <span className="text-white">)</span>
              </div>
              <div className="mt-1">
                <span className="syntax-comment">{'// => { prediction: "Q3 매출 23% 증가 예상", confidence: 0.94 }'}</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-emerald">$</span>
                <span className="cursor-blink text-emerald">▌</span>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="border border-white/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-black text-white font-mono">{s.value}</div>
                <div className="text-xs text-slate-500 font-mono mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features: Scroll-triggered full-width ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addRevealRef} className="reveal text-center mb-20">
            <span className="font-mono text-xs text-emerald tracking-widest uppercase">Features</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
              코드 한 줄로 시작하는
              <br />AI 인프라
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {features.map((f, i) => (
              <div
                key={f.tag}
                ref={addRevealRef}
                className={`reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                  <span className="font-mono text-xs text-emerald/60">{f.tag}</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2 tracking-tight">{f.title}</h3>
                  <p className="text-slate-400 mt-4 leading-relaxed lg:text-lg">{f.desc}</p>
                </div>
                <div className={`terminal-window ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500/80" />
                    <div className="terminal-dot bg-yellow-500/80" />
                    <div className="terminal-dot bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-500">example.ts</span>
                  </div>
                  <pre className="p-5 font-mono text-sm text-emerald-light/80 leading-relaxed overflow-x-auto">
                    <code>{f.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────── */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={addRevealRef} className="reveal text-center mb-16">
            <span className="font-mono text-xs text-emerald tracking-widest uppercase">Compare</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
              Why NeuralX?
            </h2>
          </div>

          <div ref={addRevealRef} className="reveal terminal-window overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-500">comparison.md</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-slate-500 font-medium">Feature</th>
                    <th className="p-4 text-emerald font-bold text-center">NeuralX</th>
                    <th className="p-4 text-slate-500 font-medium text-center">Company A</th>
                    <th className="p-4 text-slate-500 font-medium text-center">Company B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c) => (
                    <tr key={c.feature} className="compare-row border-b border-white/5">
                      <td className="p-4 text-slate-300">{c.feature}</td>
                      <td className="p-4 text-center">
                        {c.neuralx ? (
                          <span className="text-emerald text-lg">✓</span>
                        ) : (
                          <span className="text-slate-600">✗</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {c.a ? (
                          <span className="text-slate-400">✓</span>
                        ) : (
                          <span className="text-slate-600">✗</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {c.b ? (
                          <span className="text-slate-400">✓</span>
                        ) : (
                          <span className="text-slate-600">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Wall ─────────────────────────────── */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-mono text-xs text-slate-600 uppercase tracking-widest mb-10">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-16 border border-white/5 rounded-lg text-slate-600 font-mono text-sm font-semibold hover:border-white/10 hover:text-slate-400 transition-all"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: Minimal ──────────────────────────── */}
      <section className="py-32 lg:py-40 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            Start building.
            <br />
            <span className="text-emerald glow-emerald">It&apos;s free.</span>
          </h2>
          <p className="mt-6 text-slate-400 font-mono text-sm">
            No credit card required. 10,000 free API calls per month.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 font-mono text-sm bg-emerald hover:bg-emerald-light text-black font-semibold px-8 py-3 rounded-md transition-all"
          >
            $ neuralx init --start
          </Link>
        </div>
      </section>
    </main>
  )
}
