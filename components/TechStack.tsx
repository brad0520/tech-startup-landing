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
    { value: '99.99%', label: 'Uptime SLA', desc: 'Enterprise-grade reliability' },
    { value: '<12ms', label: 'P99 Latency', desc: 'Global edge network' },
    { value: '50+', label: 'Regions', desc: 'Worldwide deployment' },
    { value: '2.4M+', label: 'Daily Predictions', desc: 'Models in production' },
  ]

  return (
    <section className="py-24 px-6 relative border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-cyan-400 text-sm font-medium mb-3 tracking-wide uppercase">Infrastructure</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Built on proven technology
          </h2>
          <p className="text-zinc-400 text-lg">
            최신 ML 프레임워크와 클라우드 인프라 위에 구축된 안정적인 플랫폼입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center glow-border-hover"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-emerald-400 font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-zinc-500">{metric.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {integrations.map((tech, index) => (
            <div
              key={index}
              className="group bg-zinc-900/30 border border-zinc-800/50 rounded-lg px-4 py-4 hover:border-emerald-500/20 hover:bg-zinc-900/60 transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-md bg-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-white font-medium">{tech.name}</div>
                <div className="text-xs text-zinc-500">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
