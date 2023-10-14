import { MutableRefObject, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useFooterDisplacement(element: MutableRefObject<null>) {
 const pathname = usePathname();

 useEffect(() => {
  if (pathname !== '/' || !element.current) return;

  gsap.registerPlugin(ScrollTrigger);

  // Create timeline + start scrollTrigger
  const tl = gsap.timeline({
   scrollTrigger: {
    trigger: element.current,
    start: 'top 95%',
    toggleActions: 'play none none reverse',
    scrub: 1,
   },
  });

  // Animation to scrub
  tl.fromTo('.home-hero', { yPercent: 0 }, { yPercent: -100 });
 }, [pathname]);
}
