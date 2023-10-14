export class Item {
   name: string;
   sellIn: number;
   quality: number;

   constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
   }
}

export class GildedRose {
   items: Array<Item>;

   constructor(items = [] as Array<Item>) {
      this.items = items;
   }

   updateQuality() {
      console.log('updateQuality()');

      this.items.map((item) => {
         // Decrease sellIn for all items except Sulfuras
         if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn -= 1;
         }

         // Update item quality based on its name
         switch (item.name) {
            case 'Sulfuras, Hand of Ragnaros':
               // Sulfuras never changes
               break;

            case 'Conjured':
               if (item.quality >= 2) {
                  item.quality -= 2;
               } else {
                  item.quality = 0;
               }
               break;

            case 'Aged Brie':
               if (item.quality < 50) {
                  item.quality += 1;
               }
               break;

            case 'Backstage passes to a TAFKAL80ETC concert':
               if (item.quality < 50) {
                  if (item.sellIn > 10) {
                     item.quality += 1;
                  } else if (item.sellIn > 5 && item.sellIn <= 10) {
                     item.quality += 2;
                  } else if (item.sellIn <= 5) {
                     item.quality += 3;
                  }
               }
               if (item.sellIn < 0) {
                  item.quality = 0;
               }
               break;

            default:
               if (item.sellIn >= 0 && item.quality >= 1) {
                  item.quality -= 1;
               } else if (item.sellIn < 0 && item.quality >= 2) {
                  item.quality -= 2;
               } else if (item.sellIn < 0 && item.quality < 2) {
                  item.quality = 0;
               }
               break;
         }
      });

      return this.items;
   }
}
