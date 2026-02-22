import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'NeuralX AI 플랫폼의 투명한 가격 정책. Starter 무료 플랜부터 Enterprise 맞춤 솔루션까지.',
}

const plans = [
  {
    tier: 'starter',
    name: 'Starter',
    price: '무료',
    period: '',
    desc: '개인 프로젝트와 프로토타이핑에 적합',
    features: [
      '10,000 API calls / month',
      '2 models deployed',
      'Community support',
      'Basic monitoring',
      'Shared GPU cluster',
    ],
    cta: '무료로 시작',
    highlighted: false,
  },
  {
    tier: 'scale',
    name: 'Scale',
    price: '₩490,000',
    period: '/ month',
    desc: '성장하는 팀과 프로덕션 워크로드',
    features: [
      '1,000,000 API calls / month',
      'Unlimited models',
      'Priority support (SLA 4h)',
      'Advanced monitoring & alerts',
      'Dedicated GPU instances',
      'Custom model training',
      'A/B testing & canary deploy',
    ],
    cta: '14일 무료 체험',
    highlighted: true,
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: '대규모 조직을 위한 맞춤형 솔루션',
    features: [
      'Unlimited API calls',
      'Unlimited everything',
      'Dedicated support engineer',
      'VPC deployment',
      'SSO / SAML / RBAC',
      'SOC2 / ISO 27001 / GDPR',
      'Custom SLA (99.99%+)',
      'On-premise option',
    ],
    cta: '영업팀 문의',
    highlighted: false,
  },
]

const faqs = [
  { q: '무료 체험 기간은 얼마나 되나요?', a: 'Scale 플랜은 14일 무료 체험을 제공합니다. 신용카드 등록 없이 바로 시작할 수 있습니다.' },
  { q: '언제든지 플랜을 변경할 수 있나요?', a: '네, 언제든지 업그레이드 또는 다운그레이드가 가능합니다. 변경 사항은 다음 결제 주기부터 적용됩니다.' },
  { q: '환불 정책은 어떻게 되나요?', a: '구독 후 30일 이내에 만족하지 못하실 경우 전액 환불해드립니다. 별도의 조건 없이 바로 처리됩니다.' },
  { q: 'Enterprise 플랜은 어떻게 신청하나요?', a: '영업팀에 문의하시면 조직 규모와 요구사항에 맞는 맞춤형 견적을 제공해드립니다.' },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-emerald tracking-widest uppercase">Pricing</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            규모에 맞는 플랜을 선택하세요. 언제든 변경 가능합니다.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-xl p-8 flex flex-col ${
                  plan.highlighted
                    ? 'border-2 border-emerald bg-emerald/5 relative'
                    : 'border border-white/10'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-xs bg-emerald text-black px-3 py-1 rounded-full font-semibold">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">{plan.tier}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 font-mono text-sm ml-1">{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="text-emerald mt-0.5">✓</span>
                      <span className="text-slate-300 font-mono">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center font-mono text-sm font-semibold py-3 rounded-md transition-all ${
                    plan.highlighted
                      ? 'bg-emerald hover:bg-emerald-light text-black'
                      : 'border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-10 text-center tracking-tight">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white tracking-tight">궁금한 점이 있으신가요?</h2>
          <p className="mt-4 text-slate-400 font-mono text-sm">영업팀과 상담하여 최적의 솔루션을 찾아보세요.</p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/contact" className="font-mono text-sm bg-emerald hover:bg-emerald-light text-black font-semibold px-8 py-3 rounded-md transition-all">
              $ get-started --free
            </Link>
            <Link href="/contact" className="font-mono text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 px-8 py-3 rounded-md transition-all">
              $ contact-sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
