import styled from 'styled-components';
import { ProductCard } from '@/components';

import { useGildedRoseContext } from '@/context';

const Container = styled.section`
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 3);
 margin-top: calc(var(--global-spacing) * 3);
 background-color: var(--color-primary);
 grid-column: 8 / span 5;
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
