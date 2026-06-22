'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURES = [
  {
    icon: '💰',
    title: 'Your next sale is one tap away',
    desc: 'Sell in cash, card or transfer. Digital receipts. No special hardware. Just your phone.',
  },
  {
    icon: '📦',
    title: 'Never run out again',
    desc: 'Know what to reorder before you run out. Get alerts, track every movement, stay in control.',
  },
  {
    icon: '📊',
    title: 'Finally know how much you actually made',
    desc: '35 reports that answer the questions keeping you up at night. Export to PDF and Excel.',
  },
  {
    icon: '🏦',
    title: 'Go home with peace of mind',
    desc: 'Daily close in one tap. Compare counted cash vs system. Spot discrepancies instantly.',
  },
  {
    icon: '👥',
    title: 'Turn one-time buyers into regulars',
    desc: 'Remember every customer. See who buys most. Reward the ones who come back.',
  },
  {
    icon: '💸',
    title: 'Find the leaks in your business',
    desc: 'See where your money actually goes. Track by category, supplier, or period.',
  },
  {
    icon: '🏢',
    title: 'Scale without losing control',
    desc: 'Run 5 locations like you\'re standing in each one. Reports per branch, transfers included.',
  },
  {
    icon: '🌎',
    title: 'Works where you are',
    desc: 'Your currency. Your taxes. Your fiscal reports. Available in 25+ countries.',
  },
  {
    icon: '🤖',
    title: 'Like a business advisor that never sleeps',
    desc: 'Ask your business any question. Get the answer instantly. Built-in AI, no extra cost.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.features-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.features-header', start: 'top 85%' },
      });

      gsap.from('.feature', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.features-grid', start: 'top 82%' },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="container">
        <div className="features-header">
          <h2>Stop guessing. Start knowing.</h2>
          <p className="features-sub">
            Every tool you need to know exactly how your business is doing — from your phone.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
