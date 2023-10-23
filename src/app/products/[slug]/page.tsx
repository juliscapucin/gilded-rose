import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { getProduct, getProducts } from '@/lib';
import { ProductPage } from '@/components/pages';

type Params = {
 params: {
  slug: string;
 };
};

export async function generateMetadata({ params: { slug } }: Params) {
 const productName = slug.replaceAll('-', ' ');
 const product = getProduct(productName);

 if (!product) {
  return { title: 'Product Not Found', description: 'Product not found' };
 }

 return {
  title: product.name,
  description: `Gilded Rose – ${product.name}`,
 };
}

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;

 const product = await getProduct(slug);
 console.log(product);

 if (!product) return notFound();

 return (
  <Suspense fallback={<h2>Loading...</h2>}>
   <ProductPage product={product} />;
  </Suspense>
 );
}

// SSG – Static Site Generation
export async function generateStaticParams() {
 const products = await getProducts();

 if (!products) return [];

 return products?.map((product) => {
  const productSlug = product.name
   .toLowerCase()
   .split(' ')
   .slice(0, 2)
   .join('-');
  return productSlug;
 });
}
