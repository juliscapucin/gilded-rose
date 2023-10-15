'use client';

import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { ProductsSection } from '@/components';
import { Grid, Subtitle, Title } from '@/components/styles';

const StyledHero = styled.section`
 margin-top: var(--big-margin);

 @media (min-width: ${breakpoints.tablet}) {
  position: fixed;
  top: var(--big-margin);
  left: calc(var(--global-spacing) * 3);
  width: 50%;
  margin-top: 0;
 }
`;

export default function Home() {
 return (
  <Grid className='page'>
   <StyledHero className='home-hero'>
    <Title $marginMobile={true}>Welcome to Gilded Rose.</Title>
    <Subtitle>
     We are a small inn with a prime location in a prominent city ran by a
     friendly innkeeper named Allison. We also buy and sell only the finest
     goods.
    </Subtitle>
   </StyledHero>
   <ProductsSection variant={'new'} />
  </Grid>
 );
}
