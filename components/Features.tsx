export default function Features() {
  const features = [
    {
      title: 'AI 기반 자동화',
      description: '머신러닝 알고리즘을 통한 지능형 업무 자동화로 생산성을 극대화합니다',
      items: ['스마트 워크플로우', '자동 데이터 처리', '예측 분석', 'API 통합'],
    },
    {
      title: '실시간 분석',
      description: '빅데이터 처리 엔진으로 즉각적인 비즈니스 인사이트를 제공합니다',
      items: ['대시보드 시각화', '실시간 모니터링', '커스텀 리포트', '알림 시스템'],
    },
    {
      title: '엔터프라이즈 보안',
      description: '은행급 보안 시스템으로 데이터와 비즈니스를 안전하게 보호합니다',
      items: ['암호화 전송', '접근 제어', '감사 로그', '규정 준수'],
    },
  ]

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            강력한 <span className="text-purple-400">기능</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            비즈니스 성장을 가속화하는 혁신적인 기능들을 경험하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-purple-500 mr-2">⚡</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
