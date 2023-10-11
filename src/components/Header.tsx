'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
 position: fixed;
 top: 0;
 left: 0;
 z-index: 10;
 height: var(--header-height);
 width: 50%;
 padding: 0 calc(var(--global-spacing) * 3);
 display: flex;
 justify-content: space-between;
 align-items: center;
 color: ${({ theme }) => theme.colors.secondary};
 background-color: ${({ theme }) => theme.colors.primary};
`;

const Navigation = styled.nav`
 display: flex;
 gap: calc(var(--global-spacing) * 4);
`;

export default function Header() {
 return (
  <StyledHeader>
   <Link href='/'>
    <h1>G--R</h1>
   </Link>
   <Navigation>
    <Link href='/products'>Products</Link>
    <Link href='/sale'>Sale</Link>
    <Link href='/about'>About</Link>
    <Link href='/contact'>Contact Us</Link>
   </Navigation>
  </StyledHeader>
 );
}
