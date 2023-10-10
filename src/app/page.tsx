'use client';

import styled from 'styled-components';

import { ProductsSession } from '@/components';
import { GildedRoseContextProvider } from '@/context';

const Container = styled.section`
 min-height: 100vh;
 display: grid;
 grid-template-columns: repeat(12, 1fr);
`;

const StyledHero = styled.section`
 position: fixed;
 top: 200px;
 left: calc(var(--global-spacing) * 3);
 width: 50%;

 h1 {
  font-size: var(--text-display);
  margin-bottom: calc(var(--global-spacing) * 2);
 }

 p {
  font-size: var(--text-subtitle);
 }
`;

export default function Home() {
 return (
  <Container>
   <StyledHero>
    <h1>Welcome to Gilded Rose.</h1>
    <p>
     We are a small inn with a prime location in a prominent city ran by a
     friendly innkeeper named Allison. We also buy and sell only the finest
     goods.
    </p>
   </StyledHero>
   <GildedRoseContextProvider>
    <ProductsSession />
   </GildedRoseContextProvider>
  </Container>
 );
}
