'use client';

import { ProductsSection } from '@/components';
import { Title } from '@/components/styles';

export default function page() {
 return (
  <>
   <Title>Products</Title>
   <ProductsSection variant={'all'} />
  </>
 );
}
