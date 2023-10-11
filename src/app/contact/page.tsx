'use client';

import { ContactForm } from '@/components';
import { Grid, PageContainer, Paragraph, Subtitle } from '@/components/styles';

export default function page() {
 return (
  <Grid>
   <PageContainer>
    <h1>Contact Gilded Rose</h1>
    <Subtitle>
     Send us an email or give us a call M-F 9am-4pm MST. We would love to hear
     from you!
    </Subtitle>
    <Paragraph>
     <strong>Phone:</strong> (555) 555-5555
    </Paragraph>
    <ContactForm />
   </PageContainer>
  </Grid>
 );
}