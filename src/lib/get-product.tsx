import { getInventory } from '@/lib';

export default function getProduct(slug: string) {
 const res = getInventory;
 const name = slug.replaceAll('-', ' ');
 const product = res.items.find((item) =>
  item.name.toLowerCase().includes(name.toLowerCase())
 );

 if (!product) return undefined;
 return product;
}
