'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export default function useAnimateOnRouteChange() {
 const pathname = usePathname();

 useEffect(() => {
  if (typeof window == 'undefined') return;
  gsap.registerPlugin(SplitText);

  // If pathname is root, animate only transition overlay and home hero
  if (pathname === '/') {
   const overlay = document.querySelector('[data-animation-overlay]');
   const homeHero = document.querySelector('[data-animation-home-hero]');
   const footer = document.querySelector('[data-animation-footer]');

   if (!overlay || !footer || !homeHero) return;

   gsap.fromTo(overlay, { xPercent: 0 }, { xPercent: 100 });

   gsap.registerPlugin(ScrollTrigger);

   // Animate Hero on home page according to footer position
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
    .to(homeHero, { yPercent: -100 });

   // If pathname is not root, animate transition overlay, page and title
  } else {
   const splitText = new SplitText('[data-animation-title]', {
    type: 'words, chars, lines',
   });

   const overlay = document.querySelector('[data-animation-overlay]');
   const page = document.querySelector('[data-animation-page]');

   // Page transition enter on pathname change
   const tl = gsap.timeline();

   tl
    .fromTo(overlay, { xPercent: 0 }, { xPercent: 100 })
    .fromTo(page, { xPercent: -20 }, { xPercent: 0 }, '<')
    .fromTo(
     splitText?.lines,
     { y: 50 },
     { y: 0, stagger: 0.05, duration: 0.2, ease: 'back' },
     '-=0.3'
    );
  }
 }, [pathname]);
}
