'use client';

import { useGildedRoseContext } from '@/context';

import { ProductImage, ProductNotFound } from '@/components';
import { Button, Grid, PageContainer, Title } from '@/components/styles';
import { ButtonBack } from '@/components/buttons';

export default function Page({ params }: { params: { slug: string } }) {
 const { allItems } = useGildedRoseContext();
 const product = allItems.find((item) => {
  const productSlug = item.name.toLowerCase().split(' ').slice(0, 2).join('-');

  if (productSlug === params.slug) return item;
 });

 return (
  <Grid data-animation-page>
   {product ? (
    <>
     <ButtonBack />
     <ProductImage productSlug={params.slug} />
     <PageContainer>
      <Title $margin={false} data-animation-title>
       {product?.name}
      </Title>
      <p>Sell In: {product?.sellIn}</p>
      <p>Quality: {product?.quality}</p>
      <Button $variant='primary'>Buy</Button>
     </PageContainer>
    </>
   ) : (
    <ProductNotFound />
   )}
  </Grid>
 );
}
