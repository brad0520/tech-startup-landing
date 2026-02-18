import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import Pricing from '@/components/Pricing'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Hero />
      <Features />
      <TechStack />
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to build with AI?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            무료로 시작하고, 비즈니스가 성장할 때 확장하세요.
            신용카드 없이 즉시 사용 가능합니다.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 rounded-lg transition-all text-sm"
            >
              Start building free
            </Link>
            <Link
              href="/demo"
              className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-6 py-3 rounded-lg font-medium transition-all text-sm"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
