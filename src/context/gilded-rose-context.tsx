'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getInventory } from '@/lib';
import { Product } from '@/types';

type GildedRoseContextType = {
 allItems: Product[] | null;
 newItems: Product[] | null;
 saleItems: Product[] | null;
 updateQuality: () => void;
};

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
 const [inventory, setInventory] = useState<Product[] | null>(
  getInventory.items
 );
 const [allItems, setAllItems] = useState<Product[] | null>(null);
 const [newItems, setNewItems] = useState<Product[] | null>(null);
 const [saleItems, setSaleItems] = useState<Product[] | null>(null);
 const gildedRose = getInventory;

 const updateQuality = () => {
  const updatedItems = gildedRose.updateQuality();
  setAllItems(updatedItems);
 };

 const filterUnavailableItems = () => {
  // Remove items with sellin <= 0 and quality <= 0
  const filteredInventory = inventory!.filter(
   (item) => item.sellIn > 0 || item.quality > 0
  );

  setAllItems(filteredInventory);
 };

 const filterNewItems = () => {
  // Get the first 5 new items
  const newItems = allItems!.sort((a, b) => {
   // First, compare by sellIn in descending order
   if (b.sellIn !== a.sellIn) {
    return b.sellIn - a.sellIn;
   }

   // If sellIn values are equal, compare by quality in descending order
   return b.quality - a.quality;
  });

  const first5NewItems = newItems.slice(0, 5);
  setNewItems(first5NewItems);
 };

 const filterSaleItems = () => {
  const saleItems = allItems!.filter(
   (item) =>
    item.name !== 'Sulfuras' &&
    !item.name.includes('Backstage') &&
    !item.name.includes('Brie') &&
    item.sellIn <= 2
  );

  setSaleItems(saleItems);
 };

 useEffect(() => {
  if (!inventory) return;

  filterUnavailableItems();
 }, [inventory]);

 useEffect(() => {
  if (!allItems) return;

  filterNewItems();
  filterSaleItems();
 }, [allItems]);

 return (
  <GildedRoseContext.Provider
   value={{ allItems, newItems, saleItems, updateQuality }}
  >
   {children}
  </GildedRoseContext.Provider>
 );
};
