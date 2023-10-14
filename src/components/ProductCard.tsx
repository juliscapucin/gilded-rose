'use client';

import { styled } from 'styled-components';
import { Product } from '@/types';

type ProductCardProps = {
 item: Product;
};

const StyledProductCard = styled.div`
 position: relative;
 padding: calc(var(--global-spacing) * 3);
 background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary};
 width: 100%;
 aspect-ratio: 1 / 1;
`;

const StyledProductInfo = styled.div`
 position: absolute;
 top: 0;
 left: 0;
`;

export default function ProductCard({ item }: ProductCardProps) {
 const { name, sellIn, quality } = item;
 return (
  <StyledProductCard>
   <StyledProductInfo>
    <h2>{name}</h2>
    <p>Sell In: {sellIn}</p>
    <p>Quality: {quality}</p>
   </StyledProductInfo>
  </StyledProductCard>
 );
}
