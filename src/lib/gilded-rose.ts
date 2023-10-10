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

   //  updateQuality() {
   //    for (let i = 0; i < this.items.length; i++) {
   //      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
   //        if (this.items[i].quality > 0) {
   //          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
   //            this.items[i].quality = this.items[i].quality - 1
   //          }
   //        }
   //      } else {
   //        if (this.items[i].quality < 50) {
   //          this.items[i].quality = this.items[i].quality + 1
   //          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
   //            if (this.items[i].sellIn < 11) {
   //              if (this.items[i].quality < 50) {
   //                this.items[i].quality = this.items[i].quality + 1
   //              }
   //            }
   //            if (this.items[i].sellIn < 6) {
   //              if (this.items[i].quality < 50) {
   //                this.items[i].quality = this.items[i].quality + 1
   //              }
   //            }
   //          }
   //        }
   //      }
   //      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
   //        this.items[i].sellIn = this.items[i].sellIn - 1;
   //      }
   //      if (this.items[i].sellIn < 0) {
   //        if (this.items[i].name != 'Aged Brie') {
   //          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
   //            if (this.items[i].quality > 0) {
   //              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
   //                this.items[i].quality = this.items[i].quality - 1
   //              }
   //            }
   //          } else {
   //            this.items[i].quality = this.items[i].quality - this.items[i].quality
   //          }
   //        } else {
   //          if (this.items[i].quality < 50) {
   //            this.items[i].quality = this.items[i].quality + 1
   //          }
   //        }
   //      }
   //    }

   //    return this.items;
   //  }

   updateQuality() {
      // Filter out items with quality 0
      const itemsToUpdate = this.items.filter((item) => item.quality > 0);

      itemsToUpdate.map((item) => {
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
                  }
                  if (item.sellIn <= 10 && item.sellIn > 5) {
                     item.quality += 2;
                  }
                  if (item.sellIn <= 5) {
                     item.quality += 3;
                  }
               }
               if (item.sellIn < 0) {
                  item.quality = 0;
               }
               break;

            default:
               if (item.quality > 0 && item.sellIn >= 0) {
                  item.quality -= 1;
               }
               if (item.sellIn < 0 && item.quality > 2) {
                  item.quality -= 2;
               } else if (item.sellIn < 0 && item.quality <= 2) {
                  item.quality = 0;
               }
               break;
         }
      });

      return itemsToUpdate;
   }
}
