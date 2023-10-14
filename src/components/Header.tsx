'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { ButtonBurger, ButtonClose, ButtonLogo } from '@/components/buttons';
import { NavLinks } from '@/components';

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

const StyledMobileHeader = styled.div`
 position: fixed;
 display: flex;
 justify-content: space-between;
 z-index: 20;
 top: 0;
 left: 0;
 right: 0;
 width: 100%;
 padding: calc(var(--global-spacing) * 2);

 @media (min-width: ${breakpoints.desktop}) {
  display: none;
 }
`;

export default function Header() {
 const [isOpen, setIsOpen] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
  setIsOpen(false);
 }, [pathname]);

 const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
  setIsOpen(!isOpen);
 };

 return (
  <>
   <StyledMobileHeader>
    {isOpen ? (
     <ButtonClose action={toggleMenu} />
    ) : (
     <>
      <ButtonLogo />
      <ButtonBurger action={toggleMenu} />
     </>
    )}
   </StyledMobileHeader>
   <StyledHeader $isOpen={isOpen}>
    <ButtonLogo />
    <NavLinks variant='header' />
   </StyledHeader>
  </>
 );
}
