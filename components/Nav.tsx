'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.gteamx7.nawi';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(nav, { backgroundColor: 'rgba(15,23,42,0.97)', borderColor: 'rgba(255,255,255,0.06)' });
      return;
    }

    gsap.set(nav, { backgroundColor: 'rgba(15,23,42,0)', borderColor: 'rgba(255,255,255,0)' });

    const trigger = ScrollTrigger.create({
      start: 'top -80px',
      onEnter: () =>
        gsap.to(nav, {
          backgroundColor: 'rgba(15,23,42,0.97)',
          borderColor: 'rgba(255,255,255,0.06)',
          duration: 0.4,
          ease: 'power2.out',
        }),
      onLeaveBack: () =>
        gsap.to(nav, {
          backgroundColor: 'rgba(15,23,42,0)',
          borderColor: 'rgba(255,255,255,0)',
          duration: 0.4,
          ease: 'power2.out',
        }),
    });

    return () => trigger.kill();
  }, []);

  return (
    <nav ref={navRef} className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          <span className="nav-brand-name">POS X</span>
          <span className="nav-tag">by La Comuna</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href={PLAY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
            Download free
          </a>
        </div>
      </div>
    </nav>
  );
}
