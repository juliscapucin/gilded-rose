'use client';

import { usePathname, useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { exitPageTransition } from '@/animations';

import { NavLink } from '@/components/styles';
import { breakpoints } from '@/lib/styles-constants';
import { useAnimateOnRouteChange } from '@/hooks';

const navbar = [
 { href: '/products', label: 'Products' },
 { href: '/sale', label: 'Sale' },
 { href: '/about', label: 'About' },
 { href: '/contact', label: 'Contact' },
];

const StyledNavbar = styled.nav<{ $variant: string }>`
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

 .navlink-container {
  position: relative;
 }

 .inactive {
  position: relative;
  display: inline-block;
  margin-left: calc(var(--global-spacing) * 0.5);

  @media (max-width: ${breakpoints.desktop}) {
   font-size: var(--text-large);
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

const StyledBadge = styled.span`
 position: absolute;
 top: calc(var(--global-spacing) * -0.5);
 right: calc(var(--global-spacing) * -1.5);
 display: flex;
 align-items: center;
 justify-content: center;
 width: 14px;
 height: 14px;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary} !important;
 font-size: var(--text-tiny);
 font-weight: 700;
`;

type Props = { variant: string; saleItems?: number; totalItems?: number };

export default function Navbar({ variant, saleItems, totalItems }: Props) {
 const router = useRouter();
 const pathname = usePathname();

 // Triggers page transitions and animations every time the pathname changes
 useAnimateOnRouteChange();

 return (
  <StyledNavbar $variant={variant}>
   <h3>Explore</h3>
   {navbar.map((item, index) => (
    <div className='navlink-container' key={`navlink-${index}`}>
     {item.label === 'Sale' && <StyledBadge>{saleItems}</StyledBadge>}
     {item.label === 'Products' && <StyledBadge>{totalItems}</StyledBadge>}
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
  </StyledNavbar>
 );
}
