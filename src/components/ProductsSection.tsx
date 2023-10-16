'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { Loader, ProductCard } from '@/components';
import { useGildedRoseContext } from '@/context';

import { Product } from '@/types';
import { Subtitle } from './styles';

const ContainerHome = styled.section`
 display: flex;
 flex-direction: column;
 gap: calc(var(--global-spacing) * 6);
 margin-top: calc(var(--global-spacing) * 3);
 background-color: var(--color-primary);
 grid-column: 8 / span 5;
 margin-bottom: calc(var(--global-spacing) * 10);
`;

const ContainerThumbs = styled.section`
 display: grid;
 gap: calc(var(--global-spacing) * 6);
 margin-bottom: calc(var(--global-spacing) * 10);

 @media (min-width: ${breakpoints.mobile}) {
  grid-template-columns: repeat(2, 1fr);
 }
 @media (min-width: ${breakpoints.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }
`;

export default function ProductsSection({ variant }: { variant: string }) {
 const { allItems } = useGildedRoseContext();
 const [inventory, setInventory] = useState<Product[] | null>(null);
 const [itemsNew, setItemsNew] = useState<Product[] | null>(null);
 const [itemsSale, setItemsSale] = useState<Product[] | null>(null);

 useEffect(() => {
  if (!allItems) return;

  // Remove items with sellin <= 0 and quality <= 0
  const filteredInventory = allItems.filter(
   (item) => item.sellIn > 0 || item.quality > 0
  );

  setInventory(filteredInventory);

  // New Items (first 5 items sorted by sellIn and quality)
  if (variant === 'new') {
   const newItems = filteredInventory.sort((a, b) => {
    // First, compare by sellIn in descending order
    if (b.sellIn !== a.sellIn) {
     return b.sellIn - a.sellIn;
    }

    // If sellIn values are equal, compare by quality in descending order
    return b.quality - a.quality;
   });

   // Get the first 5 items
   const first5NewItems = newItems.slice(0, 5);
   setItemsNew(first5NewItems);

   // Get Sale Items (items with sellIn <= 1)
  } else if (variant === 'sale') {
   const saleItems = filteredInventory.filter(
    (item) =>
     item.name !== 'Sulfuras' &&
     !item.name.includes('Backstage') &&
     !item.name.includes('Brie') &&
     item.sellIn <= 2
   );

   setItemsSale(saleItems);
  }
 }, [allItems]);

 return variant === 'new' ? (
  <>
   {itemsNew && (
    // Render the first 5 new items in home page
    <ContainerHome>
     {itemsNew.map((item, index) => {
      return <ProductCard item={item} key={`product-card-${index}`} />;
     })}
    </ContainerHome>
   )}
   {!itemsNew && <Loader />}
  </>
 ) : variant === 'all' ? (
  <>
   {inventory && (
    // Render all items in products page
    <ContainerThumbs>
     {inventory.map((item, index) => {
      return <ProductCard item={item} key={`product-card-${index}`} />;
     })}
    </ContainerThumbs>
   )}
   {!inventory && <Loader />}
  </>
 ) : (
  variant === 'sale' && (
   // Render all items on sale in sale page
   <>
    {itemsSale && itemsSale.length > 0 && (
     <ContainerThumbs>
      {itemsSale.map((item, index) => {
       return <ProductCard item={item} key={`product-card-${index}`} />;
      })}
     </ContainerThumbs>
    )}
    {/* If there are no items on sale, render a text */}
    {itemsSale && itemsSale.length === 0 && (
     <Subtitle>No items on sale</Subtitle>
    )}
    {!itemsSale && <Loader />}
   </>
  )
 );
}
