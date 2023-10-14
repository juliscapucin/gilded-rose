'use client';

import { useRouter } from 'next/navigation';

import { styled } from 'styled-components';
import { Product } from '@/types';

type ProductCardProps = {
 item: Product;
};

const StyledProductCard = styled.button`
 position: relative;
 padding: calc(var(--global-spacing) * 3);
 background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary};
 width: 100%;
 aspect-ratio: 1 / 1;
 border-radius: var(--border-radius);
`;

const StyledProductInfo = styled.div`
 position: absolute;
 top: calc(var(--global-spacing) * 3);
 left: calc(var(--global-spacing) * 3);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: var(--global-spacing);
 text-align: left;
`;

export default function ProductCard({ item }: ProductCardProps) {
 const { name, sellIn, quality } = item;
 const router = useRouter();

 const handleProductModal = (
  e: React.MouseEvent<HTMLButtonElement>,
  name: string
 ) => {
  const slug = name.toLowerCase().split(' ').slice(0, 2).join('-');
  console.log(slug);
  router.push(`/products/${slug}`);
 };

 return (
  <StyledProductCard onClick={(e) => handleProductModal(e, name)}>
   <StyledProductInfo>
    <h2>{name}</h2>
    <p>Sell In: {sellIn}</p>
    <p>Quality: {quality}</p>
   </StyledProductInfo>
  </StyledProductCard>
 );
}
