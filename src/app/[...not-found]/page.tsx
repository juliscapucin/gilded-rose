'use client';

import Link from 'next/link';

import { Grid, PageContainer, Subtitle, Title } from '@/components/styles';

export default function Page() {
 return (
  <Grid>
   <PageContainer>
    <Title>Something went wrong :(</Title>
    <Subtitle>The page you requested does not exist.</Subtitle>
    <Link href={'/'}>Go back home</Link>
   </PageContainer>
  </Grid>
 );
}
