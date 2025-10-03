import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            합리적인 <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">가격</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            비즈니스 규모에 맞는 최적의 플랜을 선택하세요
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-6">
            {[
              {
                q: '무료 체험 기간은 얼마나 되나요?',
                a: '모든 플랜에서 14일 무료 체험을 제공합니다. 신용카드 등록 없이 바로 시작할 수 있습니다.',
              },
              {
                q: '언제든지 플랜을 변경할 수 있나요?',
                a: '네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 즉시 적용됩니다.',
              },
              {
                q: '환불 정책은 어떻게 되나요?',
                a: '구독 후 30일 이내에 만족하지 못하실 경우 전액 환불해드립니다.',
              },
              {
                q: 'Enterprise 플랜은 어떻게 신청하나요?',
                a: '영업팀에 문의하시면 맞춤형 견적을 제공해드립니다. contact@techcorp.com으로 연락주세요.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            아직 고민 중이신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            영업팀과 상담하여 최적의 플랜을 찾아보세요
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              무료로 시작하기
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
              영업팀 문의
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
