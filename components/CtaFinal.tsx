'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.gteamx7.nawi';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.303-2.492zM5.864 2.658 16.8 9.99l-2.302 2.302L5.864 2.658z" />
  </svg>
);

export default function CtaFinal() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.cta-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="cta-final" ref={sectionRef}>
      <div className="container cta-content">
        <h2>
          Join La Comuna.
          <br />
          Grow your business.
        </h2>
        <p>7-day free trial. No credit card. No commitment.</p>
        <a href={PLAY_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
          <PlayIcon />
          Download free on Google Play
        </a>
      </div>
    </section>
  );
}
