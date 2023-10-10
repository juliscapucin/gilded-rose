'use client';

import styled from 'styled-components';

import { ProductsSession } from '@/components';
import { GildedRoseContextProvider } from '@/context';

const Container = styled.main`
 background-color: var(--color-primary);
 min-height: 100vh;
`;

export default function Home() {
 return (
  <Container>
   <h1>Gilded Rose</h1>
   <GildedRoseContextProvider>
    <ProductsSession />
   </GildedRoseContextProvider>
  </Container>
 );
}
