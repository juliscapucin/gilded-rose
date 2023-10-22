import { getInventory } from '@/lib';

export default function getProducts() {
 const products = getInventory.items;

 if (!products) return undefined;

 return products;
}
