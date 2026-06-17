import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Features from '@/components/Features';
import Community from '@/components/Community';
import BusinessChips from '@/components/BusinessChips';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Features />
        <Community />
        <BusinessChips />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
