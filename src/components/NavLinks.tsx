import { usePathname, useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { exitPageTransition } from '@/animations';

import { NavLink } from '@/components/styles';
import { breakpoints } from '@/lib/styles-constants';
import { useEnterPageTransition } from '@/hooks';

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

const navLinks = [
 { href: 'products', label: 'Products' },
 { href: 'sale', label: 'Sale' },
 { href: 'about', label: 'About' },
 { href: 'contact', label: 'Contact Us' },
];

export default function NavLinks({ variant }: { variant: string }) {
 const router = useRouter();
 const pathname = usePathname();

 // Triggers Enter Page transition every time the pathname changes
 useEnterPageTransition();

 return (
  <StyledNavLinks $variant={variant}>
   <h3>Explore</h3>
   {navLinks.map((item, index) =>
    pathname.includes(`/${item.href}`) ? (
     // if href is the same as the current pathname, don't add a link
     <span className='inactive' key={`span-${index}`}>
      {item.label}
     </span>
    ) : (
     // if href is different from the current pathname, add a link
     <NavLink
      key={`navlink-${index}`}
      onClick={() => exitPageTransition(() => router.push(item.href))}
     >
      {item.label}
     </NavLink>
    )
   )}
  </StyledNavLinks>
 );
}
