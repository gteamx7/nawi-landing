'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURES = [
  {
    icon: '💰',
    title: 'Point of Sale',
    desc: 'Accept cash, card or transfer. Digital receipts. Automatic tax calculation. Works on any Android device.',
  },
  {
    icon: '📦',
    title: 'Real-time inventory',
    desc: 'Stock tracking, reorder alerts, movement history, categories. Know exactly what you have and what you need.',
  },
  {
    icon: '📊',
    title: '35 reports',
    desc: 'Sales, inventory, finance, CRM, operations and tax. Interactive charts. Export to PDF and Excel.',
  },
  {
    icon: '🏦',
    title: 'Cash register close',
    desc: 'Daily close in one tap. Automatic cash vs system comparison. Detect discrepancies instantly.',
  },
  {
    icon: '👥',
    title: 'Customers & CRM',
    desc: 'Customer database, purchase history, top clients, purchase frequency. Tax ID for invoicing.',
  },
  {
    icon: '💸',
    title: 'Expense tracking',
    desc: 'Log expenses by category and supplier. Income statement. Cash flow. Gross margin per product.',
  },
  {
    icon: '🏢',
    title: 'Multi-location',
    desc: 'Manage multiple locations from one account. Reports per branch. Inventory transfers between locations.',
  },
  {
    icon: '🌎',
    title: 'Multi-country',
    desc: 'Local currencies, taxes and fiscal reports adapted to your country. Available in 25+ countries worldwide.',
  },
  {
    icon: '🤖',
    title: 'Built-in AI',
    desc: "AI advisor analyzes your business automatically. One of the few POS systems in the world with integrated AI.",
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
          <h2>Everything your business needs</h2>
          <p className="features-sub">
            35 reports, full inventory, and tools that expensive POS systems don&apos;t give you.
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
