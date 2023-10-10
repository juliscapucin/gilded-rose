'use client';

import styled from 'styled-components';

import { ProductsSession } from '@/components';
import { GildedRoseContextProvider } from '@/context';
import { Grid } from '@/components/styles';

const StyledHero = styled.section`
 margin-top: var(--big-margin);

 @media (min-width: 768px) {
  position: fixed;
  top: var(--big-margin);
  left: calc(var(--global-spacing) * 3);
  width: 50%;
  margin-top: 0;
 }

 h1 {
  font-size: var(--text-display);
  margin-bottom: calc(var(--global-spacing) * 3);
 }

 p {
  font-size: var(--text-subtitle);
 }
`;

export default function Home() {
 return (
  <Grid>
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
  </Grid>
 );
}
