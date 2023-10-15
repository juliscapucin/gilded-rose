'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';

export default function useEnterPageTransition() {
 const pathname = usePathname();

 useEffect(() => {
  if (typeof window == 'undefined') return;
  const page = document.querySelector('[data-animation-page]');

  // Create timeline
  const tl = gsap.timeline();

  // Animation
  tl.fromTo(page, { xPercent: -100 }, { xPercent: 0 });
 }, [pathname]);
}
