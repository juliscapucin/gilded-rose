'use client';

import { ProductsSection } from '@/components';
import { Title } from '@/components/styles';

export default function page() {
 return (
  <div className='page'>
   <Title $marginMobile={true}>Products</Title>
   <ProductsSection variant={'all'} />
  </div>
 );
}
