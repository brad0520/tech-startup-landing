import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: '개인 프로젝트와 프로토타이핑',
      features: [
        '월 1,000 API calls',
        '기본 모델 3종',
        '커뮤니티 지원',
        '1 project',
        '7일 데이터 보관',
      ],
    },
    {
      name: 'Pro',
      price: '₩49,000',
      period: '/월',
      description: '성장하는 스타트업과 팀',
      features: [
        '무제한 API calls',
        '전체 모델 라이브러리',
        '우선 이메일 지원',
        '10 projects',
        'API 키 관리',
        '90일 데이터 보관',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: '대규모 조직과 맞춤 솔루션',
      features: [
        '맞춤형 API limits',
        '커스텀 모델 학습',
        '전담 솔루션 엔지니어',
        '무제한 projects',
        'SLA 99.99%',
        '온프레미스 배포',
        'SSO & SAML',
      ],
    },
  ]

  return (
    <section className="py-24 px-6 relative border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 text-sm font-medium mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400 text-lg">
            비즈니스 규모에 맞는 플랜을 선택하세요. 숨겨진 비용 없이 투명한 가격.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-900/50 border rounded-xl p-6 transition-all ${
                plan.popular
                  ? 'border-emerald-500/40 glow-emerald'
                  : 'border-zinc-800 glow-border-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-sm text-zinc-500">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full py-2.5 rounded-lg font-medium text-sm text-center transition-all ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-black'
                    : 'border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
