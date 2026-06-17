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
          We&apos;re not a software company.
          <br />
          We&apos;re a <em>tech cooperative.</em>
        </h2>
        <p className="manifesto-body">
          La Comuna was born in Guatemala with an idea for the world: the technology to run your
          business shouldn&apos;t cost what big corporations charge. Every new member, from any
          country, strengthens the entire community.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(30,64,175,0.08)' }}>
              📉
            </div>
            <h3>Price drops with growth</h3>
            <p>
              The more businesses that join, the lower the cost for everyone. It&apos;s not a
              discount — it&apos;s the model. More members = less cost per member.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(245,158,11,0.08)' }}>
              🗳️
            </div>
            <h3>You decide what&apos;s next</h3>
            <p>
              The community votes on which reports, integrations and features get built first. Your
              voice counts as much as anyone else&apos;s.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon" style={{ background: 'rgba(16,185,129,0.08)' }}>
              🔄
            </div>
            <h3>Always improving</h3>
            <p>
              Constant updates. No extra charges for new versions. Every improvement reaches all
              members automatically, forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
