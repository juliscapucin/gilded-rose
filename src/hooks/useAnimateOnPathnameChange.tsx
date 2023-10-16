'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useAnimateOnPathnameChange() {
 const pathname = usePathname();

 useEffect(() => {
  if (typeof window == 'undefined') return;

  // Page transition enter on pathname change
  const page = document.querySelector('[data-animation-overlay]');

  const tl = gsap.timeline();

  tl.fromTo(page, { xPercent: 0 }, { xPercent: 100 });

  // Animate hero on home page according to footer position
  if (pathname !== '/') return;
  const footer = document.querySelector('[data-animation-footer]');
  gsap.registerPlugin(ScrollTrigger);

  const footerDisplacement = gsap.timeline({
   scrollTrigger: {
    trigger: footer,
    start: 'top 95%',
    toggleActions: 'play none none reverse',
    scrub: 1,
   },
  });

  // Animation to scrub
  footerDisplacement.fromTo(
   '[data-animation-home-hero]',
   { yPercent: 0 },
   { yPercent: -100 }
  );
 }, [pathname]);
}
