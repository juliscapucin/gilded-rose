'use client';

import { ProductImage, ProductNotFound } from '@/components';
import { Button, Grid, PageContainer, Title } from '@/components/styles';
import { ButtonBack } from '@/components/buttons';
import { Product } from '@/types';

export default function ProductPage({ product }: { product: Product }) {
 const productSlug = product.name
  .toLowerCase()
  .split(' ')
  .slice(0, 2)
  .join('-');

 return (
  <Grid data-animation-page>
   {product ? (
    <>
     <ButtonBack />
     <ProductImage productSlug={productSlug} />
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
