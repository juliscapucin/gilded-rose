'use client';

import { styled } from 'styled-components';
import Link from 'next/link';

import { useGildedRoseContext } from '@/context';

import { Button, Grid, PageContainer, Title } from '@/components/styles';
import { ButtonBack } from '@/components/buttons';

const StyledProductImage = styled.div`
 grid-column: 1 / span 4;
 background-color: ${({ theme }) => theme.colors.secondary};
 aspect-ratio: 1 / 1;
 border-radius: var(--border-radius);
`;

export default function Page({ params }: { params: { slug: string } }) {
 const { allItems } = useGildedRoseContext();
 const product = allItems.find((item) => {
  const productSlug = item.name.toLowerCase().split(' ').slice(0, 2).join('-');

  if (productSlug === params.slug) return item;
 });

 return (
  <Grid className='page'>
   <ButtonBack />
   <StyledProductImage />
   <PageContainer>
    <Title $marginMobile={false}>{product?.name}</Title>
    <p>Sell In: {product?.sellIn}</p>
    <p>Quality: {product?.quality}</p>
    <Button $variant='primary'>Buy</Button>
   </PageContainer>
  </Grid>
 );
}
