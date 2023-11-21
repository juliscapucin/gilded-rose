import { getInventory } from '@/lib';

export default function getProduct(slug: string) {
 const res = getInventory.items;
 const name = slug.replaceAll('-', ' ');
 const product = res.find((item) =>
  item.name.toLowerCase().includes(name.toLowerCase())
 );

 if (!product) return undefined;
 return product;
}
