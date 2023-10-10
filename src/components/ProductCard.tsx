import { styled } from 'styled-components';

type ProductCardProps = {
 item: {
  name: string;
  sellIn: number;
  quality: number;
 };
};

const StyledProductCard = styled.div`
 padding: calc(var(--global-spacing) * 3);
 background-color: ${({ theme }) => theme.colors.secondary};
 color: ${({ theme }) => theme.colors.primary};
 width: 100%;
 aspect-ratio: 1 / 1;
`;

export default function ProductCard({ item }: ProductCardProps) {
 const { name, sellIn, quality } = item;
 return (
  <StyledProductCard>
   <h2>{name}</h2>
   <p>Sell In: {sellIn}</p>
   <p>Quality: {quality}</p>
  </StyledProductCard>
 );
}
