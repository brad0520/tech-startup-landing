export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '무료',
      description: '개인 및 소규모 프로젝트',
      features: ['월 1,000 요청', '기본 분석', '커뮤니티 지원', '1개 프로젝트'],
    },
    {
      name: 'Pro',
      price: '₩49,000',
      period: '/월',
      description: '성장하는 스타트업',
      features: ['무제한 요청', '고급 분석', '우선 지원', '10개 프로젝트', 'API 액세스'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '맞춤 견적',
      description: '대규모 기업',
      features: ['맞춤형 솔루션', '전담 지원', '온프레미스 배포', '무제한 프로젝트', 'SLA 보장'],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            합리적인 <span className="text-purple-400">가격</span>
          </h2>
          <p className="text-xl text-gray-400">
            비즈니스 규모에 맞는 최적의 플랜을 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all ${
                plan.popular
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  인기
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                  {plan.period && <span className="text-xl text-gray-400">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-purple-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
