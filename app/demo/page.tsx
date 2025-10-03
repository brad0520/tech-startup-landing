import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            제품 <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">데모</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            실제 작동하는 제품을 직접 체험해보세요
          </p>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Description */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                AI 기반 대시보드
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                실시간으로 데이터를 분석하고 시각화하는 강력한 대시보드입니다.
                직관적인 인터페이스로 복잡한 데이터도 쉽게 이해할 수 있습니다.
              </p>
              <ul className="space-y-3">
                {['실시간 데이터 업데이트', '커스터마이징 가능한 위젯', '다크/라이트 테마 지원', 'PDF/CSV 내보내기'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-purple-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Demo Visual */}
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-400">Interactive Demo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: '목표 추적', desc: '실시간 KPI 모니터링' },
              { icon: '📈', title: '성과 분석', desc: '자동화된 리포트 생성' },
              { icon: '🔔', title: '알림 설정', desc: '중요 이벤트 알림' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            제품 소개 영상
          </h2>
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-4">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">▶️</div>
                <p className="text-gray-400 text-xl">제품 데모 영상</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            직접 체험해보고 싶으신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            14일 무료 체험으로 모든 기능을 사용해보세요
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            무료 체험 시작하기
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
