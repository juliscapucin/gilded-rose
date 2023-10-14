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
 gap: calc(var(--global-spacing) * 3);
 margin-top: calc(var(--global-spacing) * 3);
 background-color: var(--color-primary);
 grid-column: 8 / span 5;
`;

const ContainerThumbs = styled.section`
 display: grid;
 gap: calc(var(--global-spacing) * 3);

 @media (min-width: ${breakpoints.mobile}) {
  grid-template-columns: repeat(2, 1fr);
 }
 @media (min-width: ${breakpoints.tablet}) {
  grid-template-columns: repeat(3, 1fr);
 }
`;

export default function ProductsSection({ variant }: { variant: string }) {
 const { allItems } = useGildedRoseContext();
 const [itemsNew, setItemsNew] = useState<Product[] | null>(null);
 const [itemsSale, setItemsSale] = useState<Product[] | null>(null);

 // New Items (first 5 items sorted by sellIn and quality)
 useEffect(() => {
  if (!allItems && variant !== 'new') return;

  const newItems = allItems.sort((a, b) => {
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
 }, [allItems]);

 // Sale Items (items with sellIn <= 1)
 useEffect(() => {
  if (!allItems && variant !== 'sale') return;

  const saleItems = allItems.filter(
   (item) => item.sellIn <= 2 && item.quality <= 2
  );

  setItemsSale(saleItems);
 }, [allItems]);

 return variant === 'new' ? (
  <>
   {itemsNew && (
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
   {allItems && (
    <ContainerThumbs>
     {allItems.map((item, index) => {
      return <ProductCard item={item} key={`product-card-${index}`} />;
     })}
    </ContainerThumbs>
   )}
   {!allItems && <Loader />}
  </>
 ) : (
  variant === 'sale' && (
   <>
    {itemsSale && itemsSale.length > 0 && (
     <ContainerThumbs>
      {itemsSale.map((item, index) => {
       return <ProductCard item={item} key={`product-card-${index}`} />;
      })}
     </ContainerThumbs>
    )}
    {itemsSale && itemsSale.length === 0 && (
     <Subtitle>No items on sale</Subtitle>
    )}
    {!itemsSale && <Loader />}
   </>
  )
 );
}
