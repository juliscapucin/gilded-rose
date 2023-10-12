'use client';

import Link from 'next/link';
import styled from 'styled-components';

import { breakpoints } from '@/lib/constants';
import { NavLink } from '@/components/styles';
import { ButtonBurger, ButtonLogo } from '@/components/buttons';
import { useState } from 'react';

const StyledHeader = styled.header`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 10;
 width: 100%;
 height: 100%;
 padding: 0 calc(var(--global-spacing) * 3);
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: calc(var(--global-spacing) * 10);
 text-align: center;
 color: ${({ theme }) => theme.colors.secondary};
 background-color: ${({ theme }) => theme.colors.primary};
 transform: translate3d(-100%, 0, 0);

 @media (min-width: ${breakpoints.desktop}) {
  flex-direction: row;
  height: var(--header-height);
  width: 55%;
  gap: 0;
  justify-content: space-between;
  text-align: left;
  transform: translate3d(0, 0, 0);
 }
`;

const Navigation = styled.nav`
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 4);

 @media (min-width: ${breakpoints.desktop}) {
  flex-direction: row;
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

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 return (
  <>
   <ButtonBurger action={toggleMenu} />
   <StyledHeader>
    <ButtonLogo />
    <Navigation>
     {navLinks.map((item, index) => (
      <NavLink key={`navlink-${index}`}>
       <Link href={item.href}>{item.label}</Link>
      </NavLink>
     ))}
    </Navigation>
   </StyledHeader>
  </>
 );
}
