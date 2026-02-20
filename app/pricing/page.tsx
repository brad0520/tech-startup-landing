import type { Metadata } from 'next'
import Link from 'next/link'
import Pricing from '@/components/Pricing'

export const metadata: Metadata = {
  title: '요금제',
  description: 'NeuralX AI 플랫폼의 투명한 가격 정책. Starter 무료 플랜부터 Enterprise 맞춤 솔루션까지.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold mb-3 tracking-wide uppercase">Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              함께 성장하는{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                요금제
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              비즈니스 규모에 맞는 최적의 플랜을 선택하세요.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">자주 묻는 질문</h2>
          <div className="space-y-3">
            {[
              {
                q: '무료 체험 기간은 얼마나 되나요?',
                a: '모든 유료 플랜에서 14일 무료 체험을 제공합니다. 신용카드 등록 없이 바로 시작할 수 있습니다.',
              },
              {
                q: '언제든지 플랜을 변경할 수 있나요?',
                a: '네, 언제든지 업그레이드 또는 다운그레이드가 가능합니다. 변경 사항은 다음 결제 주기부터 적용됩니다.',
              },
              {
                q: '환불 정책은 어떻게 되나요?',
                a: '구독 후 30일 이내에 만족하지 못하실 경우 전액 환불해드립니다. 별도의 조건 없이 바로 처리됩니다.',
              },
              {
                q: 'Enterprise 플랜은 어떻게 신청하나요?',
                a: '영업팀에 문의하시면 조직 규모와 요구사항에 맞는 맞춤형 견적을 제공해드립니다.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 card-hover"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            궁금한 점이 있으신가요?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            영업팀과 상담하여 최적의 솔루션을 찾아보세요.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/contact"
              className="border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-all text-sm"
            >
              영업팀 문의
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
