'use client';

import { ProductsSession } from '@/components';
import styled from 'styled-components';

const Container = styled.main`
 display: grid;
 grid-template-columns: repeat(3, minmax(0, 1fr));
 gap: 1.5rem /* 24px */;
 background-color: var(--color-primary);
 min-height: 100vh;
`;

export default function Home() {
 return (
  <Container>
   <h1>Gilded Rose</h1>
   <ProductsSession />
  </Container>
 );
}
