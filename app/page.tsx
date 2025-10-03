import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <Pricing />
      <Footer />
    </main>
  )
}
