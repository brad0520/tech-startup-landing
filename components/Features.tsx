export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
          <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
          <path d="M8.56 13a8 8 0 0 0-2.3 3.5" />
          <path d="M15.44 13a8 8 0 0 1 2.3 3.5" />
        </svg>
      ),
      title: '예측 분석',
      description: 'ML 모델 기반 예측 분석으로 비즈니스 트렌드를 사전에 파악하고 의사결정을 지원합니다.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h.01" />
          <path d="M17 7h.01" />
          <path d="M7 17h.01" />
          <path d="M17 17h.01" />
          <path d="M12 12h.01" />
        </svg>
      ),
      title: '뉴럴 프로세싱',
      description: '딥러닝 아키텍처로 비정형 데이터를 처리하고 패턴을 자동으로 인식합니다.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: '엔터프라이즈 보안',
      description: 'SOC2 Type II 인증, E2E 암호화, 그리고 세분화된 접근 제어로 데이터를 보호합니다.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: '실시간 스트리밍',
      description: '밀리초 단위의 실시간 데이터 스트리밍으로 지연 없는 인사이트를 제공합니다.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
      title: '오토 스케일링',
      description: '트래픽에 따라 자동으로 리소스를 확장하고 축소하여 비용을 최적화합니다.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: '글로벌 엣지 네트워크',
      description: '전 세계 50+ 리전에 분산된 엣지 네트워크로 어디서든 빠른 응답을 보장합니다.',
    },
  ]

  return (
    <section className="py-24 px-6 relative bg-slate-50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wide uppercase">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            AI 제품 구축에 필요한 모든 것
          </h2>
          <p className="text-slate-500 text-lg">
            프로덕션 레디 AI 인프라로 아이디어에서 배포까지 빠르게 진행하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
