'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Community() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.community-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.community-header', start: 'top 85%' },
      });

      gsap.from('.comm-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: { trigger: '.community-grid', start: 'top 82%' },
      });

      gsap.from('.comm-tag', {
        opacity: 0,
        scale: 0.85,
        duration: 0.35,
        ease: 'back.out(1.5)',
        stagger: 0.06,
        scrollTrigger: { trigger: '.community-grid', start: 'top 70%' },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="community" id="community" ref={sectionRef}>
      <div className="container">
        <div className="community-header">
          <h2>Tell us what you need. We&apos;ll build it.</h2>
          <p className="community-sub">
            Every feature request from the community gets heard. The most voted ones get built.
            Everyone benefits.
          </p>
        </div>
        <div className="community-grid">
          <div className="comm-card">
            <h3>📊 Need a report that doesn&apos;t exist?</h3>
            <p>
              Need a report that doesn&apos;t exist? Propose it. The community votes and La Comuna
              builds it. Everyone gets it.
            </p>
            <div className="comm-examples">
              <span className="comm-tag comm-tag--voted">✓ Food cost</span>
              <span className="comm-tag comm-tag--voted">✓ ABC analysis</span>
              <span className="comm-tag">Margin by hour</span>
              <span className="comm-tag">Daily waste</span>
              <span className="comm-tag">Sales vs weather</span>
            </div>
          </div>
          <div className="comm-card">
            <h3>🔌 Want to connect with another service?</h3>
            <p>
              Want to connect your POS with another service? The community decides which
              integrations get prioritized.
            </p>
            <div className="comm-examples">
              <span className="comm-tag">WhatsApp Business</span>
              <span className="comm-tag">Uber Eats</span>
              <span className="comm-tag">QuickBooks</span>
              <span className="comm-tag">Stripe</span>
              <span className="comm-tag">Accounting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
