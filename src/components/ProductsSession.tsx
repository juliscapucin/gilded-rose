import styled from 'styled-components';
import { ProductCard } from '@/components';

const Container = styled.section`
 display: grid;
 grid-template-columns: repeat(3, minmax(0, 1fr));
 gap: 1.5rem /* 24px */;
 background-color: var(--color-primary);
 min-height: 100vh;
`;

export default function ProductsSession() {
 return (
  <Container>
   <ProductCard />
  </Container>
 );
}
