'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      gsap.from('.manifesto-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-title', start: 'top 85%' },
      });

      gsap.from('.manifesto-body', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto-body', start: 'top 88%' },
      });

      gsap.from('.value-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.values-grid', start: 'top 82%' },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="manifesto" ref={sectionRef}>
      <div className="container">
        <h2 className="manifesto-title">
          Every big POS company charges you more as they grow.
          <br />
          <em>We do the opposite.</em>
        </h2>
        <p className="manifesto-body">
          You&apos;re not just buying software. You&apos;re joining a movement of business owners
          who refuse to overpay for technology. The more of us there are, the less we all pay.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(30,64,175,0.08)' }}>
              📉
            </div>
            <h3>Pay less together</h3>
            <p>
              Every new member makes it cheaper for everyone. Not a discount — it&apos;s the model.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(245,158,11,0.08)' }}>
              🗳️
            </div>
            <h3>You build this with us</h3>
            <p>
              Tell us what you need. We build it. Everyone gets it. That&apos;s how it should work.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(16,185,129,0.08)' }}>
              🔄
            </div>
            <h3>Never stop growing</h3>
            <p>
              Constant updates. No extra charges. Every improvement reaches everyone automatically,
              forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
