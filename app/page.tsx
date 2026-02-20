import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import Pricing from '@/components/Pricing'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <TechStack />
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="mesh-blob mesh-blob-blue animate-blob w-[400px] h-[400px] -top-20 right-10 absolute" />
        <div className="mesh-blob mesh-blob-cyan animate-blob-slow w-[300px] h-[300px] bottom-0 left-20 absolute" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            AI와 함께 시작할 준비가 되셨나요?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            무료로 시작하고, 비즈니스가 성장할 때 확장하세요.
            신용카드 없이 즉시 사용 가능합니다.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/demo"
              className="border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-all text-sm"
            >
              데모 요청하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
