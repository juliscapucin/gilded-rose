'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

import { NavLink } from '@/components/styles';

const StyledSocialLinks = styled.nav`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: calc(var(--global-spacing) * 2);

 h3 {
  font-size: var(--text-subtitle);
  margin-left: calc(var(--global-spacing) * 0.5);
 }
`;

const socialLinks = [
 { href: 'https://instagram/gilded-rose', label: 'Instagram' },
 { href: 'https://fb/gilded-rose', label: 'Facebook' },
 { href: 'https://linkedin/in/gilded-rose', label: 'LinkedIn' },
];

export default function SocialLinks() {
 return (
  <StyledSocialLinks>
   <h3>Follow Us</h3>
   {socialLinks.map((item, index) => (
    <NavLink key={`navlink-${index}`}>
     <Link href={item.href}>{item.label}</Link>
    </NavLink>
   ))}
  </StyledSocialLinks>
 );
}
