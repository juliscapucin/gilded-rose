import styled from 'styled-components';
import { ProductCard } from '@/components';

import { useGildedRoseContext } from '@/context';

const ContainerHome = styled.section`
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 3);
 margin-top: calc(var(--global-spacing) * 3);
 background-color: var(--color-primary);
 grid-column: 8 / span 5;
`;

const ContainerThumbs = styled.section`
 display: grid;
 gap: calc(var(--global-spacing) * 3);

 @media (min-width: 480px) {
  grid-template-columns: repeat(2, 1fr);
 }
 @media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
 }
`;

const ContainerList = styled.section`
 display: flex;
 flex-direction: column;
`;

export default function ProductsSection({ variant }: { variant: string }) {
 const { items, updateQuality } = useGildedRoseContext();

 return variant === 'home' ? (
  <ContainerHome>
   {items.map((item, index) => {
    return <ProductCard item={item} key={`product-card-${index}`} />;
   })}
  </ContainerHome>
 ) : variant === 'thumbnails' ? (
  <ContainerThumbs>
   {items.map((item, index) => {
    return <ProductCard item={item} key={`product-card-${index}`} />;
   })}
  </ContainerThumbs>
 ) : (
  variant === 'list' && (
   <ContainerList>
    {items.map((item, index) => {
     return <ProductCard item={item} key={`product-card-${index}`} />;
    })}
   </ContainerList>
  )
 );
}
