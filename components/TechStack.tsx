export default function TechStack() {
  const integrations = [
    { name: 'Python', category: 'Language' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Kafka', category: 'Streaming' },
    { name: 'GraphQL', category: 'API' },
  ]

  const metrics = [
    { value: '99.99%', label: 'Uptime SLA', desc: '엔터프라이즈급 안정성' },
    { value: '<12ms', label: 'P99 레이턴시', desc: '글로벌 엣지 네트워크' },
    { value: '50+', label: '리전', desc: '전 세계 배포' },
    { value: '2.4M+', label: '일일 예측', desc: '프로덕션 모델' },
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-accent text-sm font-semibold mb-3 tracking-wide uppercase">Infrastructure</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            검증된 기술 위에 구축
          </h2>
          <p className="text-slate-500 text-lg">
            최신 ML 프레임워크와 클라우드 인프라 위에 구축된 안정적인 플랫폼입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-sm text-primary font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-slate-400">{metric.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {integrations.map((tech, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl px-4 py-4 hover:border-primary/30 hover:shadow-sm transition-all flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-900 font-medium">{tech.name}</div>
                <div className="text-xs text-slate-400">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
