import { Item, GildedRose } from '@/utils/gilded-rose';

describe('Gilded Rose', () => {
   it('should foo', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('foo');
   });

   it('should decrease sellIn and quality for a normal item', () => {
      const items = [new Item('Normal Item', 5, 10)];
      const gildedRose = new GildedRose(items);

      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(9);
   });

   it('should decrease quality twice as fast when sellIn is negative for a normal item', () => {
      const items = [new Item('Normal Item', -1, 10)];
      const gildedRose = new GildedRose(items);

      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-2);
      expect(items[0].quality).toBe(8);
   });

   it('should not allow quality to be negative for a normal item', () => {
      const items = [new Item('Normal Item', 5, 0)];
      const gildedRose = new GildedRose(items);

      gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
   });

   it('should decrease sellIn and quality for a normal item', () => {
      const items = [new Item('Normal Item', 10, 20)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(19);
   });

   it('should not allow quality to be negative for a normal item', () => {
      const items = [new Item('Normal Item', 10, 0)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(0);
   });

   it('should increase quality for Aged Brie', () => {
      const items = [new Item('Aged Brie', 10, 20)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(21);
   });

   it('should not allow quality to exceed 50 for Aged Brie', () => {
      const items = [new Item('Aged Brie', 10, 50)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(50);
   });

   it('should set quality to 0 for Backstage passes after the concert', () => {
      const items = [
         new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
      ];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(-1);
      expect(updatedItems[0].quality).toBe(0);
   });

   it('should increase quality by 2 for Backstage passes within 10 days of the concert', () => {
      const items = [
         new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20),
      ];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(8);
      expect(updatedItems[0].quality).toBe(22);
   });

   it('should increase quality by 3 for Backstage passes within 5 days of the concert', () => {
      const items = [
         new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
      ];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(4);
      expect(updatedItems[0].quality).toBe(23);
   });

   it('should decrease quality by 2 for Conjured items', () => {
      const items = [new Item('Conjured', 10, 20)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(18);
   });

   it('should not allow quality to be negative for Conjured items', () => {
      const items = [new Item('Conjured', 10, 0)];
      const gildedRose = new GildedRose(items);
      const updatedItems = gildedRose.updateQuality();

      expect(updatedItems[0].sellIn).toBe(9);
      expect(updatedItems[0].quality).toBe(0);
   });
});
