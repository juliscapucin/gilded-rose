'use client';

import { ProductsSection } from '@/components';
import { Title } from '@/components/styles';

export default function ProductsPage() {
 return (
  <div data-animation-page>
   <Title $margin={true} data-animation-title>
    Products
   </Title>
   <ProductsSection variant={'all'} />
  </div>
 );
}
