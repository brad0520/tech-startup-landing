import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '무료',
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
    <section className="py-24 px-6 relative bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-primary text-sm font-semibold mb-3 tracking-wide uppercase">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            심플하고 투명한 요금제
          </h2>
          <p className="text-slate-500 text-lg">
            비즈니스 규모에 맞는 플랜을 선택하세요. 숨겨진 비용 없이 투명한 가격.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-2xl p-6 transition-all ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-blue-500/10 scale-[1.02]'
                  : 'border-slate-200 card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  가장 인기
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-sm text-slate-400">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-sm shadow-blue-500/20'
                    : 'border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {plan.name === 'Enterprise' ? '영업팀 문의' : '시작하기'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
