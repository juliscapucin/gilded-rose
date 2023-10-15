'use client';

import styled from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';
import { ProductsSection } from '@/components';
import { Grid, Subtitle, Title } from '@/components/styles';

const StyledHomeHero = styled.section`
 margin-top: var(--big-margin);

 @media (min-width: ${breakpoints.tablet}) {
  position: fixed;
  top: var(--big-margin);
  margin-top: 0;
  left: calc(var(--global-spacing) * 3);
  width: 50%;
 }
`;

export default function Home() {
 return (
  <Grid data-animation-page>
   <StyledHomeHero>
    <Title $marginMobile={true}>Welcome to Gilded Rose.</Title>
    <Subtitle>
     We are a small inn with a prime location in a prominent city ran by a
     friendly innkeeper named Allison. We also buy and sell only the finest
     goods.
    </Subtitle>
   </StyledHomeHero>
   <ProductsSection variant={'new'} />
  </Grid>
 );
}
