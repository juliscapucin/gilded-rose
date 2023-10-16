'use client';

import { Grid, PageContainer, Paragraph, Title } from '@/components/styles';

const aboutContent = `<p>
Gilded Rose is not just a shop; it's an experience. Located in the heart of
our thriving city, we pride ourselves on offering a carefully curated
selection of the finest goods you'll find anywhere. Our shop is a haven for
those seeking the extraordinary.
</p>
<p>
Step through our doors, and you'll discover a world where quality,
elegance, and exceptional service converge. From rare and exquisite
treasures to everyday essentials, Gilded Rose is your trusted source for
all your shopping needs.
</p>
<p>
Our dedicated team, led by the friendly and knowledgeable shopkeeper,
Allison, is here to assist you in finding that perfect item, whether it's a
unique gift, a piece of fine jewelry, or something special just for you. We
believe that shopping should be more than a transaction; it should be a
delightful journey.
</p>
<p>
At Gilded Rose, we take immense pride in our commitment to excellence. Our
shop exudes a warm and inviting ambiance that welcomes you to explore at
your leisure. We believe in the power of a beautifully crafted shopping
experience, and that's exactly what you'll find here. Join us in
celebrating the art of shopping. Gilded Rose is more than just a shop; it's
a destination for those who appreciate the finer things in life. Visit us
today, and let your shopping adventure begin!
</p>`;

export default function page() {
 return (
  <Grid data-animation-page>
   <PageContainer>
    <Title $marginMobile={true}>About Gilded Rose</Title>
    {aboutContent.split('<p>').map((paragraph, index) => {
     const cleanParagraph = paragraph.replace('</p>', '');
     return (
      <Paragraph key={`about-paragraph-${index}`}>{cleanParagraph}</Paragraph>
     );
    })}
   </PageContainer>
  </Grid>
 );
}
