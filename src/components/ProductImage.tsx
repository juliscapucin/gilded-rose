'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

const StyledProductImage = styled.div`
 position: relative;
 grid-column: 1 / span 4;
 aspect-ratio: 1 / 1;
 border-radius: var(--border-radius);
 display: flex;
 justify-content: center;
 align-items: center;

 img {
  z-index: 1;
 }
`;

const StyledProductBackground = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 position: absolute;
 z-index: 0;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 border-radius: var(--border-radius);
 opacity: 0.4;
 background-color: ${({ theme }) => theme.colors.customColor1};
`;

export default function ProductImage({ productSlug }: { productSlug: string }) {
 return (
  <StyledProductImage>
   <StyledProductBackground>
    <Image
     src={`/assets/icons/${productSlug}.svg`}
     alt={`Icon representing ${productSlug}`}
     fill={true}
    />
   </StyledProductBackground>
  </StyledProductImage>
 );
}
