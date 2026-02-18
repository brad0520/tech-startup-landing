import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Demo',
  description: 'NeuralX AI 플랫폼의 실시간 데이터 분석, 대시보드, 예측 모델링 데모를 체험해보세요.',
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">Live Demo</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              See NeuralX{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                in action
              </span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              실제 작동하는 AI 플랫폼을 직접 체험해보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                AI Analytics Dashboard
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                실시간으로 데이터를 분석하고 시각화하는 대시보드입니다.
                직관적인 인터페이스로 복잡한 데이터를 쉽게 이해할 수 있습니다.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time data streaming',
                  'Customizable widget layout',
                  'Dark/Light theme support',
                  'Export to PDF/CSV/JSON',
                  'Collaborative annotations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-zinc-500 font-mono">dashboard.neuralx.io</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '₩2.4B', change: '+23%' },
                    { label: 'Users', value: '12.5K', change: '+8%' },
                    { label: 'Models', value: '342', change: '+15%' },
                  ].map((metric, i) => (
                    <div key={i} className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-3">
                      <div className="text-xs text-zinc-500 mb-1">{metric.label}</div>
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-emerald-400">{metric.change}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-4 h-40 flex items-end justify-between gap-1">
                  {[40, 55, 35, 70, 50, 80, 65, 90, 75, 85, 95, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-emerald-500/60 to-emerald-500/20 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live data - Updated 2s ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                  </svg>
                ),
                title: 'Sales Forecasting',
                desc: '매출 데이터를 기반으로 AI가 미래 트렌드를 예측합니다.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: 'Anomaly Detection',
                desc: '이상 패턴을 실시간으로 감지하고 즉시 알림을 전송합니다.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Customer Segmentation',
                desc: '고객 행동 데이터를 자동으로 클러스터링합니다.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 glow-border-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Product Walkthrough</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-zinc-500 text-sm">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Try it yourself
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            14일 무료 체험으로 모든 기능을 사용해보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 rounded-lg transition-all text-sm"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </main>
  )
}
