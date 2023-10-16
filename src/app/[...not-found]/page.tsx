'use client';

import Link from 'next/link';

import { Grid, PageContainer, Subtitle, Title } from '@/components/styles';

export default function Page() {
 return (
  <Grid data-animation-page>
   <PageContainer>
    <Title $margin={true} data-animation-title>
     Oops!
    </Title>
    <Subtitle>The page you requested does not exist.</Subtitle>
    <Link href={'/'}>Go back home</Link>
   </PageContainer>
  </Grid>
 );
}
