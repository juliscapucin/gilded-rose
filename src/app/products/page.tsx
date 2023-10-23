import { Metadata } from 'next';

import { ProductsPage } from '@/components/pages';

export const metadata: Metadata = {
 title: 'Gilded Rose | Products',
 description: 'We sell only the finest goods.',
};

export default async function page() {
 return <ProductsPage />;
}
