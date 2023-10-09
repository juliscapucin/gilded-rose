"use client"

import Link from "next/link";
import styled from 'styled-components';

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;`

const Navigation = styled.nav`
  display: flex;
  gap: 1.5rem /* 24px */;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <h1>Gilded Rose</h1>
      <Navigation>
         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/contact">Contact</Link>
      </Navigation>
    </HeaderDiv>
  )
}
