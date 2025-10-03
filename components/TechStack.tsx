export default function TechStack() {
  const technologies = [
    { icon: '⚛️', name: 'React' },
    { icon: '🔷', name: 'TypeScript' },
    { icon: '🎨', name: 'Tailwind' },
    { icon: '🔥', name: 'Firebase' },
    { icon: '☁️', name: 'AWS' },
    { icon: '🐳', name: 'Docker' },
    { icon: '📊', name: 'GraphQL' },
    { icon: '🚀', name: 'Next.js' },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            최신 <span className="text-cyan-400">기술 스택</span>
          </h2>
          <p className="text-xl text-gray-400">
            검증된 최신 기술로 안정적인 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-cyan-500/40 hover:-translate-y-2 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                {tech.icon}
              </div>
              <div className="text-white font-semibold">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
