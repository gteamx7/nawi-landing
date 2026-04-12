import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Agents from '@/components/Agents'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0F0F23] min-h-screen">
      <Hero />
      <Features />
      <Agents />
      <Pricing />
      <Footer />
    </main>
  )
}
