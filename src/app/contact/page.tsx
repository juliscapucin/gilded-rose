'use client';

import { useRef } from 'react';

import { ContactForm } from '@/components';
import {
 Grid,
 PageContainer,
 Paragraph,
 Subtitle,
 Title,
} from '@/components/styles';

export default function page() {
 const pageRef = useRef(null);

 return (
  <Grid ref={pageRef} className='page'>
   <PageContainer>
    <Title $marginMobile={true}>Contact Gilded Rose</Title>
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
