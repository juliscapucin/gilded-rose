import Link from 'next/link';
import { styled } from 'styled-components';

import { NavLink } from '@/components/styles';
import { breakpoints } from '@/lib/styles-constants';

const StyledNavLinks = styled.nav<{ $variant: string }>`
 display: flex;
 flex-direction: column;
 align-items: ${({ $variant }) =>
  $variant === 'header' ? 'center' : 'flex-start'};
 gap: ${({ $variant }) =>
  $variant === 'header'
   ? 'calc(var(--global-spacing) * 4)'
   : 'calc(var(--global-spacing) * 2)'};

 @media (min-width: ${breakpoints.desktop}) {
  flex-direction: ${({ $variant }) =>
   $variant === 'header' ? 'row' : 'column'};
  margin-top: 0;
 }

 h3 {
  display: ${({ $variant }) => ($variant === 'header' ? 'none' : 'block')};
  font-size: var(--text-subtitle);
  margin-left: calc(var(--global-spacing) * 0.5);
 }
`;

const navLinks = [
 { href: '/products', label: 'Products' },
 { href: '/sale', label: 'Sale' },
 { href: '/about', label: 'About' },
 { href: '/contact', label: 'Contact Us' },
];

export default function NavLinks({ variant }: { variant: string }) {
 return (
  <StyledNavLinks $variant={variant}>
   <h3>Explore</h3>
   {navLinks.map((item, index) => (
    <NavLink key={`navlink-${index}`}>
     <Link href={item.href}>{item.label}</Link>
    </NavLink>
   ))}
  </StyledNavLinks>
 );
}
