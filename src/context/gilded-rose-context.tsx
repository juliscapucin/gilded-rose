import { createContext, useContext, useEffect, useState } from 'react';
import { Item, GildedRose } from '@/utils/gilded-rose';

// Define the context
interface GildedRoseContextType {
 allItems: Item[];
 updateQuality: () => void;
}

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
 const initialItems: Item[] = [
  new Item('Kebab', 10, 20),
  new Item('Aged Brie', 2, 2),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15),
  new Item('Beverage', 12, 20),
  new Item('Ramen', 6, 2),
  new Item('Sulfuras', 12, 15),
  new Item('Conjured', 24, 50),
  new Item('Croissant', 4, 10),
 ];

 const [allItems, setAllItems] = useState<Item[]>(initialItems);
 const gildedRose = new GildedRose([...allItems]);

 const updateQuality = () => {
  const updatedItems = gildedRose.updateQuality();
  setAllItems(updatedItems);
 };

 useEffect(() => {
  updateQuality();
 }, []);

 return (
  <GildedRoseContext.Provider value={{ allItems, updateQuality }}>
   {children}
  </GildedRoseContext.Provider>
 );
};
