import { getInventory } from '@/lib';

export default function getProduct(name: string) {
 const res = getInventory;
 const product = res.items.find((item) => item.name === name);

 if (!product) return undefined;

 return product;
}
