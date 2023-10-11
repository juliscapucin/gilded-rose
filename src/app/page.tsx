'use client';

import styled from 'styled-components';

import { ProductsSection } from '@/components';
import { Grid, Subtitle, Title } from '@/components/styles';

const StyledHero = styled.section`
 margin-top: var(--big-margin);

 @media (min-width: 768px) {
  position: fixed;
  top: var(--big-margin);
  left: calc(var(--global-spacing) * 3);
  width: 50%;
  margin-top: 0;
 }
`;

export default function Home() {
 return (
  <Grid>
   <StyledHero>
    <Title>Welcome to Gilded Rose.</Title>
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
