'use client';

import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { Loader, ProductCard } from '@/components';
import { useGildedRoseContext } from '@/context';

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
 const { inventory, newItems, saleItems } = useGildedRoseContext();

 return variant === 'new' ? (
  <>
   {newItems && (
    // Render the first 5 new items in home page
    <ContainerHome>
     {newItems.map((item, index) => {
      return <ProductCard item={item} key={`product-card-${index}`} />;
     })}
    </ContainerHome>
   )}
   {!newItems && <Loader />}
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
    {saleItems && saleItems.length > 0 && (
     <ContainerThumbs>
      {saleItems.map((item, index) => {
       return <ProductCard item={item} key={`product-card-${index}`} />;
      })}
     </ContainerThumbs>
    )}
    {/* If there are no items on sale, render a text */}
    {saleItems && saleItems.length === 0 && (
     <Subtitle>No items on sale</Subtitle>
    )}
    {!saleItems && <Loader />}
   </>
  )
 );
}
