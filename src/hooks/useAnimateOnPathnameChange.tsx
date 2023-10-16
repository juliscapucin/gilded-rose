'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function useAnimateOnPathnameChange() {
 const pathname = usePathname();

 useEffect(() => {
  if (typeof window == 'undefined') return;
  gsap.registerPlugin(SplitText);

  // Create a new SplitText instance
  const splitText = new SplitText('[data-animation-title]', {
   type: 'words, chars, lines',
  });

  const overlay = document.querySelector('[data-animation-overlay]');
  const page = document.querySelector('[data-animation-page]');

  //   if (!overlay || !page) return;

  // Page transition enter on pathname change
  const tl = gsap.timeline();

  tl
   .fromTo('[data-animation-overlay]', { xPercent: 0 }, { xPercent: 100 })
   .fromTo('[data-animation-page]', { xPercent: -20 }, { xPercent: 0 }, '<')
   .fromTo(
    splitText?.chars,
    { y: 50 },
    { y: 0, stagger: 0.05, duration: 0.2, ease: 'back' },
    '-=0.3'
   );

  // Animate Hero on home page according to footer position
  if (pathname !== '/') return;
  const homeHero = document.querySelector('[data-animation-home-hero]');
  const footer = document.querySelector('[data-animation-footer]');

  if (!footer || !homeHero) return;
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
  footerDisplacement
   .set(homeHero, { yPercent: 0 })
   .fromTo(homeHero, { yPercent: 0 }, { yPercent: -100 });
 }, [pathname]);
}
