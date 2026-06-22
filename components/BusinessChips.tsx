'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BUSINESSES = [
  '☕ Cafés',
  '🍽️ Restaurants',
  '👕 Clothing stores',
  '🏪 Grocery stores',
  '🔧 Hardware stores',
  '📚 Bookstores',
  '💊 Pharmacies',
  '🍞 Bakeries',
  '💇 Beauty salons',
  '🌸 Flower shops',
  '🐾 Vet clinics',
  '🍕 Food trucks',
  '🏋️ Gyms',
  '📱 Electronics',
];

export default function BusinessChips() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.negocios-title', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });

      gsap.from('.negocio-chip', {
        opacity: 0,
        x: -16,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.04,
        scrollTrigger: { trigger: '.negocios-grid', start: 'top 88%' },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="negocios" ref={sectionRef}>
      <div className="container">
        <h2 className="negocios-title">Whatever you sell, we&apos;ve got you</h2>
        <div className="negocios-grid">
          {BUSINESSES.map((name) => (
            <span key={name} className="negocio-chip">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
