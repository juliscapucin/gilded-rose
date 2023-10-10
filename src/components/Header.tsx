'use client';

import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
 padding: calc(var(--global-spacing) * 3);
 display: flex;
 justify-content: space-between;
 align-items: center;
 color: ${({ theme }) => theme.colors.secondary};
 background-color: ${({ theme }) => theme.colors.primary};
`;

const Navigation = styled.nav`
 display: flex;
 gap: calc(var(--global-spacing) * 4);

 a {
  font-size: var(--text-large);

  &:hover {
   text-decoration: underline;
  }
 }
`;

export default function Header() {
 return (
  <StyledHeader>
   <h1>G--R</h1>
   <Navigation>
    <Link href='/'>Home</Link>
    <Link href='/'>Products</Link>
    <Link href='/about'>About</Link>
    <Link href='/contact'>Contact</Link>
   </Navigation>
  </StyledHeader>
 );
}
