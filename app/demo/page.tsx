import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '데모',
  description: 'NeuralX AI 플랫폼의 실시간 데이터 분석, 대시보드, 예측 모델링 데모를 체험해보세요.',
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold mb-3 tracking-wide uppercase">Live Demo</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              NeuralX를{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                직접 체험하세요
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              실제 작동하는 AI 플랫폼을 직접 체험해보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                AI 분석 대시보드
              </h2>
              <p className="text-slate-500 leading-relaxed">
                실시간으로 데이터를 분석하고 시각화하는 대시보드입니다.
                직관적인 인터페이스로 복잡한 데이터를 쉽게 이해할 수 있습니다.
              </p>
              <ul className="space-y-3">
                {[
                  '실시간 데이터 스트리밍',
                  '커스터마이징 가능한 위젯 레이아웃',
                  '다크/라이트 테마 지원',
                  'PDF/CSV/JSON 내보내기',
                  '협업 주석 기능',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50">
              <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-slate-400">dashboard.neuralx.io</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '₩2.4B', change: '+23%' },
                    { label: 'Users', value: '12.5K', change: '+8%' },
                    { label: 'Models', value: '342', change: '+15%' },
                  ].map((metric, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-3">
                      <div className="text-xs text-slate-400 mb-1">{metric.label}</div>
                      <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                      <div className="text-xs text-green-600 font-medium">{metric.change}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-xl p-4 h-40 flex items-end justify-between gap-1">
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
      </section>

      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">활용 사례</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                  </svg>
                ),
                title: '매출 예측',
                desc: '매출 데이터를 기반으로 AI가 미래 트렌드를 예측합니다.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: '이상 탐지',
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
                title: '고객 세분화',
                desc: '고객 행동 데이터를 자동으로 클러스터링합니다.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">제품 워크스루</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50">
            <div className="aspect-video flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">제품 데모 영상</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            직접 체험해보세요
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            14일 무료 체험으로 모든 기능을 사용해보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
          >
            무료 체험 시작
          </Link>
        </div>
      </section>
    </main>
  )
}
