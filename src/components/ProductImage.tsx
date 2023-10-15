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
  /* mix-blend-mode: color-burn; */
  transition: all 0.2s var(--ease-in-out);
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
 opacity: 0.2;

 > div:first-child {
  background-color: ${({ theme }) => theme.colors.customColor1};
 }
 > div:nth-child(2) {
  background-color: ${({ theme }) => theme.colors.customColor2};
 }
 > div:nth-child(3) {
  background-color: ${({ theme }) => theme.colors.customColor3};
 }
 > div:nth-child(4) {
  background-color: ${({ theme }) => theme.colors.secondary};
 }
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
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </StyledProductBackground>
  </StyledProductImage>
 );
}
