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

  // Page transition enter on pathname change
  const tl = gsap.timeline();

  tl
   .fromTo('[data-animation-overlay]', { xPercent: 0 }, { xPercent: 100 })
   .fromTo('[data-animation-page]', { xPercent: -20 }, { xPercent: 0 }, '<')
   .fromTo(
    splitText.chars,
    { y: 50 },
    { y: 0, stagger: 0.05, duration: 0.2, ease: 'back' }
   );

  // Animate Hero on home page according to footer position
  if (pathname !== '/') return;
  gsap.registerPlugin(ScrollTrigger);

  const footerDisplacement = gsap.timeline({
   scrollTrigger: {
    trigger: '[data-animation-footer]',
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
