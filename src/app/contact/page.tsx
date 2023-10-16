'use client';

import { ContactForm } from '@/components';
import { Grid, PageContainer, Subtitle, Title } from '@/components/styles';

export default function page() {
 return (
  <Grid data-animation-page>
   <PageContainer>
    <Title $margin={true} data-animation-title>
     Contact
    </Title>
    <Subtitle>
     Send us an email or give us a call, we would love to hear from you!
    </Subtitle>
    <Subtitle>
     <strong>Phone:</strong> (555) 555-5555
    </Subtitle>
    <ContactForm />
   </PageContainer>
  </Grid>
 );
}
