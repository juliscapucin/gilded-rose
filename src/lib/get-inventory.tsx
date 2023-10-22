import { Item, GildedRose } from '@/utils/gilded-rose';
import { inventory } from '@/data';

export const getInventory = (() => {
 const allItems = inventory.map(
  (item) => new Item(item.name, item.sellIn, item.quality)
 );

 const gildedRose = new GildedRose([...allItems]);

 return gildedRose;
})();
