'use client';

import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ButtonLogo } from '@/components/buttons';
import { NavLinks, SocialLinks } from '@/components';
import { breakpoints } from '@/lib/styles-constants';
import { useFooterDisplacement } from '@/hooks';

const StyledFooter = styled.footer`
 padding: calc(var(--global-spacing) * 10) calc(var(--global-spacing) * 3)
  calc(var(--global-spacing) * 10);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 border-top: 1px solid ${({ theme }) => theme.colors.secondary};

 @media (min-width: ${breakpoints.desktop}) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--global-spacing) * 10);
 }
`;

export default function Footer() {
 const footerRef = useRef(null);

 //  useFooterDisplacement(footerRef);

 const pathname = usePathname();

 //  useEffect(() => {
 //   if (pathname !== '/' || !footerRef.current) return;

 //   gsap.registerPlugin(ScrollTrigger);

 //   console.log('ji');

 //   // Create timeline + start scrollTrigger
 //   const tl = gsap.timeline({
 //    scrollTrigger: {
 //     trigger: footerRef.current,
 //     start: 'top bottom',
 //     end: 'bottom bottom',
 //     markers: true,
 //     scrub: 1,
 //    },
 //   });

 //   // Animation to scrub
 //   tl.fromTo('.home-hero', { yPercent: 0 }, { yPercent: -100 });
 //  }, [pathname]);

 return (
  <StyledFooter ref={footerRef}>
   <NavLinks variant='footer' />
   <SocialLinks />
   <div>
    <ButtonLogo />
    <div>
     <span>© 2023 Gilded Rose</span>
    </div>
   </div>
  </StyledFooter>
 );
}
