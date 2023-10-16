'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';
import { Product } from '@/types';
import { ProductImage } from '@/components';

type ProductCardProps = {
 item: Product;
};

const StyledProductCard = styled.button`
 position: relative;
 color: ${({ theme }) => theme.colors.primary};
 width: 100%;
 aspect-ratio: 1 / 1;
 border-radius: var(--border-radius);
 transition: transform 0.25s var(--ease-in-out);

 &:hover {
  transform: scale(1.1);
 }
`;

const StyledProductInfo = styled.div`
 position: absolute;
 bottom: calc(var(--global-spacing) * 3);
 left: calc(var(--global-spacing) * 3);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: var(--global-spacing);
 text-align: left;
 z-index: 10;
 color: ${({ theme }) => theme.colors.secondary};

 h2 {
  font-size: var(--text-subtitle);
 }
`;

export default function ProductCard({ item }: ProductCardProps) {
 const router = useRouter();
 const { name } = item;
 // Generate slug based on product name
 const productSlug = name.toLowerCase().split(' ').slice(0, 2).join('-');

 const handleProductClick = (name: string) => {
  const slug = name.toLowerCase().split(' ').slice(0, 2).join('-');
  router.push(`/products/${slug}`);
 };

 return (
  <StyledProductCard onClick={(e) => handleProductClick(name)}>
   <StyledProductInfo>
    <h2>{name}</h2>
   </StyledProductInfo>
   <ProductImage productSlug={productSlug} />
  </StyledProductCard>
 );
}
