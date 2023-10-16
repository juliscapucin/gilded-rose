'use client';

import { ContactForm } from '@/components';
import {
 Grid,
 PageContainer,
 Paragraph,
 Subtitle,
 Title,
} from '@/components/styles';

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
    <Paragraph>
     <strong>Phone:</strong> (555) 555-5555
    </Paragraph>
    <ContactForm />
   </PageContainer>
  </Grid>
 );
}
