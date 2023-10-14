'use client';

import { use, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { NavLink } from '@/components/styles';
import { ButtonBurger, ButtonClose, ButtonLogo } from '@/components/buttons';

const StyledHeader = styled.header<{ $isOpen: boolean }>`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 10;
 width: 100%;
 height: 100%;
 padding: calc(var(--global-spacing) * 10) calc(var(--global-spacing) * 3) 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: calc(var(--global-spacing) * 10);
 text-align: center;
 color: ${({ theme }) => theme.colors.secondary};
 background-color: ${({ theme }) => theme.colors.primary};
 transition: transform 0.3s var(--ease-in-out);
 transform: ${({ $isOpen }) =>
  $isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'};

 @media (min-width: ${breakpoints.desktop}) {
  flex-direction: row;
  height: var(--header-height);
  width: 55%;
  gap: 0;
  justify-content: space-between;
  text-align: left;
  transform: translate3d(0, 0, 0);
  top: 0;
 }
`;

const StyledNavigation = styled.nav`
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 4);

 @media (min-width: ${breakpoints.desktop}) {
  flex-direction: row;
  margin-top: 0;
 }
`;

const navLinks = [
 { href: '/products', label: 'Products' },
 { href: '/sale', label: 'Sale' },
 { href: '/about', label: 'About' },
 { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  setIsOpen(false);
 }, [pathname]);

 const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.target);
  setIsOpen(!isOpen);
 };

 return (
  <>
   <ButtonLogo isMobile={true} />
   {isOpen ? (
    <ButtonClose action={(e) => toggleMenu(e)} />
   ) : (
    <ButtonBurger action={(e) => toggleMenu(e)} />
   )}
   <StyledHeader $isOpen={isOpen}>
    <ButtonLogo isMobile={false} />
    <StyledNavigation>
     {navLinks.map((item, index) => (
      <NavLink key={`navlink-${index}`}>
       <Link href={item.href}>{item.label}</Link>
      </NavLink>
     ))}
    </StyledNavigation>
   </StyledHeader>
  </>
 );
}
