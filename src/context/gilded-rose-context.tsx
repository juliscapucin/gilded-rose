import { createContext, useContext, useEffect, useState } from 'react';
import { Item, GildedRose } from '@/utils/gilded-rose';

type GildedRoseContextType = {
 allItems: Item[];
 updateQuality: () => void;
};

const inventory = [
 { name: 'Kebab', sellIn: 10, quality: 20 },
 { name: 'Aged Brie', sellIn: 2, quality: 2 },
 { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 1, quality: 15 },
 { name: 'Beverage', sellIn: 12, quality: 20 },
 { name: 'Ramen', sellIn: 1, quality: 2 },
 { name: 'Sulfuras', sellIn: 12, quality: 15 },
 { name: 'Conjured', sellIn: 24, quality: 50 },
 { name: 'Croissant', sellIn: 0, quality: 1 },
];

// Define the context
const GildedRoseContext = createContext<GildedRoseContextType | undefined>(
 undefined
);

// Custom hook to access the context
export const useGildedRoseContext = () => {
 const context = useContext(GildedRoseContext);
 if (!context) {
  throw new Error('useGildedRose must be used within a GildedRoseProvider');
 }
 return context;
};

// GildedRoseProvider component
export const GildedRoseContextProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => {
 const initialItems = inventory.map(
  (item) => new Item(item.name, item.sellIn, item.quality)
 );

 const [allItems, setAllItems] = useState<Item[]>(initialItems);
 const gildedRose = new GildedRose([...allItems]);

 const updateQuality = () => {
  const updatedItems = gildedRose.updateQuality();
  setAllItems(updatedItems);
 };

 return (
  <GildedRoseContext.Provider value={{ allItems, updateQuality }}>
   {children}
  </GildedRoseContext.Provider>
 );
};
