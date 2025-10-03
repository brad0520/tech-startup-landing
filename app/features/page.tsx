import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  const features = [
    {
      icon: '🤖',
      title: 'AI 기반 자동화',
      description: '머신러닝 알고리즘을 통한 지능형 업무 자동화',
      details: [
        '자연어 처리 (NLP) 기반 문서 분석',
        '예측 분석을 통한 의사결정 지원',
        '자동화된 워크플로우 최적화',
        '실시간 데이터 처리 및 분석',
      ],
    },
    {
      icon: '📊',
      title: '실시간 대시보드',
      description: '직관적인 데이터 시각화와 인사이트 제공',
      details: [
        '커스터마이징 가능한 대시보드',
        '실시간 데이터 모니터링',
        '다양한 차트 및 그래프 지원',
        '모바일 반응형 디자인',
      ],
    },
    {
      icon: '🔒',
      title: '엔터프라이즈 보안',
      description: '은행급 보안 시스템으로 데이터 보호',
      details: [
        'AES-256 암호화',
        '2단계 인증 (2FA)',
        'GDPR 및 HIPAA 규정 준수',
        '정기적인 보안 감사',
      ],
    },
    {
      icon: '🚀',
      title: '빠른 배포',
      description: '원클릭으로 즉시 배포 가능',
      details: [
        'Docker 컨테이너 지원',
        'CI/CD 파이프라인 통합',
        '무중단 배포',
        '자동 스케일링',
      ],
    },
    {
      icon: '🔗',
      title: 'API 통합',
      description: '다양한 서비스와 쉬운 연동',
      details: [
        'RESTful API',
        'GraphQL 지원',
        'Webhook 자동화',
        '1000+ 앱 통합',
      ],
    },
    {
      icon: '📱',
      title: '모바일 최적화',
      description: '모든 디바이스에서 완벽한 경험',
      details: [
        '반응형 웹 디자인',
        'iOS/Android 네이티브 앱',
        'PWA 지원',
        '오프라인 모드',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            강력한 <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">기능</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            비즈니스 성장을 가속화하는 혁신적인 기능들을 경험하세요
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all group"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-400 text-sm">
                      <span className="text-purple-500 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            무료 체험으로 모든 기능을 경험해보세요
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            무료로 시작하기
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
