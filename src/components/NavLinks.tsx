'use client';

import { usePathname, useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { exitPageTransition } from '@/animations';

import { NavLink } from '@/components/styles';
import { breakpoints } from '@/lib/styles-constants';
import { useAnimateOnRouteChange } from '@/hooks';

const navLinks = [
 { href: '/products', label: 'Products' },
 { href: '/sale', label: 'Sale' },
 { href: '/about', label: 'About' },
 { href: '/contact', label: 'Contact' },
];

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

 .inactive {
  position: relative;
  display: inline-block;

  @media (max-width: ${breakpoints.desktop}) {
   font-size: var(--text-subtitle);
  }

  &::before {
   content: '';
   position: absolute;
   bottom: -2px;
   left: 0;
   width: 100%;
   height: 1px;
   background-color: ${({ theme }) => theme.colors.secondary};
  }
 }
`;

type Props = { variant: string; saleItems?: number; totalItems?: number };

export default function NavLinks({ variant, saleItems, totalItems }: Props) {
 const router = useRouter();
 const pathname = usePathname();

 // Triggers page transitions and animations every time the pathname changes
 useAnimateOnRouteChange();

 return (
  <StyledNavLinks $variant={variant}>
   <h3>Explore</h3>
   {navLinks.map((item, index) => (
    <div key={`navlink-${index}`}>
     {item.label === 'Sale' && <span>{saleItems}</span>}
     {item.label === 'Products' && <span>{totalItems}</span>}
     {/* if href is the same as current pathname, don't add a link */}
     {pathname.includes(`${item.href}`) ? (
      <span className='inactive'>{item.label}</span>
     ) : (
      // if href is different from the current pathname, add a link
      <NavLink
       key={`navlink-${index}`}
       onClick={() => exitPageTransition(() => router.push(item.href))}
      >
       {item.label}
      </NavLink>
     )}
    </div>
   ))}
  </StyledNavLinks>
 );
}
