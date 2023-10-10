'use client';

import { Grid, PageContainer, Paragraph } from '@/components/styles';

export default function page() {
 return (
  <Grid>
   <PageContainer>
    <h1>Contact Gilded Rose</h1>
    <Paragraph>
     Send us an email or give us a call M-F 9am-4pm MST. We would love to hear
     from you!
    </Paragraph>
    <Paragraph>
     <strong>Phone:</strong> (555) 555-5555
    </Paragraph>
   </PageContainer>
  </Grid>
 );
}
