import { styled } from 'styled-components';

const StyledProductImage = styled.div<{ $bgImage: string }>`
 grid-column: 1 / span 4;
 background-color: ${({ theme }) => theme.colors.secondary};
 aspect-ratio: 1 / 1;
 border-radius: var(--border-radius);
 background-image: ${({ $bgImage }) => `url('/assets/icons/${$bgImage}.svg')`};
 background-size: contain;
 background-position: center;
 background-repeat: no-repeat;
 fill: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.primary};
`;
export default function ProductImage({ productSlug }: { productSlug: string }) {
 return <StyledProductImage $bgImage={productSlug} />;
}
