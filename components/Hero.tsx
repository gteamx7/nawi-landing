'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.gteamx7.nawi';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.303-2.492zM5.864 2.658 16.8 9.99l-2.302 2.302L5.864 2.658z" />
  </svg>
);

// "Know your numbers." — all plain
const LINE1 = ['Know ', 'your ', 'numbers.'];
// "Grow your business." — only "Grow" is amber
const LINE2_ACCENT = 'Grow ';
const LINE2_PLAIN = ['your ', 'business.'];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-word', { y: 36, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.3')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.2')
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-trust span', { opacity: 0, y: 10, duration: 0.4, stagger: 0.1 }, '-=0.3');
    },
    { scope: heroRef }
  );

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-eyebrow">🌍 Now available worldwide</div>

        <h1>
          {LINE1.map((word, i) => (
            <span key={`l1-${i}`} className="hero-word">
              {word}
            </span>
          ))}
          <br />
          <span className="hero-word hero-word--accent">{LINE2_ACCENT}</span>
          {LINE2_PLAIN.map((word, i) => (
            <span key={`l2-${i}`} className="hero-word">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-sub">
          You didn&apos;t start your business to drown in spreadsheets. POS X handles the numbers
          so you can handle the customers.
        </p>

        <div className="hero-actions">
          <a href={PLAY_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <PlayIcon />
            Download free
          </a>
          <a href="#features" className="btn-ghost">
            See how it works ↓
          </a>
        </div>

        <div className="hero-trust">
          <span>✓ 7-day free trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 35+ reports included</span>
        </div>
      </div>
    </section>
  );
}
