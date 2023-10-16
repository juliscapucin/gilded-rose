'use client';

import { ProductImage } from '@/components';
import { Button, PageContainer, Title } from '@/components/styles';
import { ButtonBack } from '@/components/buttons';

export default function ProductNotFound() {
 return (
  <>
   <ButtonBack />
   <ProductImage productSlug={'not-found'} />
   <PageContainer>
    <Title $margin={false}>Product not found</Title>
    <p>The product you requested does not exist</p>
   </PageContainer>
  </>
 );
}
