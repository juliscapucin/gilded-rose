import styled from 'styled-components';
import { ProductCard } from '@/components';

import { useGildedRoseContext } from '@/context';

const Container = styled.section`
 display: grid;
 grid-template-columns: repeat(3, minmax(0, 1fr));
 gap: 1.5rem /* 24px */;
 background-color: var(--color-primary);
 min-height: 100vh;
`;

export default function ProductsSession() {
 const { items, updateQuality } = useGildedRoseContext();

 return (
  <Container>
   {items.map((item, index) => {
    return <ProductCard item={item} key={`product-card-${index}`} />;
   })}
  </Container>
 );
}
