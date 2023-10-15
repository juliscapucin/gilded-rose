'use client';

import { ProductsSection } from '@/components';
import { Title } from '@/components/styles';

export default function page() {
 return (
  <div data-animation-page>
   <Title $marginMobile={true}>Sale</Title>
   <ProductsSection variant={'sale'} />
  </div>
 );
}
