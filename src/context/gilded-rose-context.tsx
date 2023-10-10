import { createContext, useContext, useEffect, useState } from 'react';
import { Item, GildedRose } from '@/lib/gilded-rose';

// Define the context
interface GildedRoseContextType {
 items: Item[];
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
  new Item('Normal Item', 10, 20),
  new Item('Aged Brie', 2, 2),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15),
 ];

 // Fetch for later
 // const [data, setData] = useState<any>(null);

 // const fetchData = async () => {
 //   try {
 //     // Perform your fetch operation here
 //     const response = await fetch('https://api.example.com/data');
 //     const result = await response.json();
 //     setData(result);
 //   } catch (error) {
 //     console.error('Error fetching data:', error);
 //   }
 // };

 const [items, setItems] = useState<Item[]>(initialItems);
 const gildedRose = new GildedRose([...items]);

 const updateQuality = () => {
  const updatedItems = gildedRose.updateQuality();
  setItems(updatedItems);
 };

 useEffect(() => {
  updateQuality();
 }, []);

 return (
  <GildedRoseContext.Provider value={{ items, updateQuality }}>
   {children}
  </GildedRoseContext.Provider>
 );
};
