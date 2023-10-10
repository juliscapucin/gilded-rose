'use client';

import { styled } from 'styled-components';
import { Grid, Paragraph } from '@/components/styles';

const Container = styled.section`
 grid-column: 7 / span 5;
 margin-top: 300px;

 h1 {
  font-size: var(--text-display);
  margin-bottom: calc(var(--global-spacing) * 3);
 }
`;

export default function page() {
 return (
  <Grid>
   <Container>
    <h1>About Gilded Rose</h1>
    <Paragraph>
     Gilded Rose is not just a shop; it's an experience. Located in the heart of
     our thriving city, we pride ourselves on offering a carefully curated
     selection of the finest goods you'll find anywhere. Our shop is a haven for
     those seeking the extraordinary.
    </Paragraph>
    <Paragraph>
     Step through our doors, and you'll discover a world where quality,
     elegance, and exceptional service converge. From rare and exquisite
     treasures to everyday essentials, Gilded Rose is your trusted source for
     all your shopping needs.
    </Paragraph>
    <Paragraph>
     Our dedicated team, led by the friendly and knowledgeable shopkeeper,
     Allison, is here to assist you in finding that perfect item, whether it's a
     unique gift, a piece of fine jewelry, or something special just for you. We
     believe that shopping should be more than a transaction; it should be a
     delightful journey.
    </Paragraph>
    <Paragraph>
     At Gilded Rose, we take immense pride in our commitment to excellence. Our
     shop exudes a warm and inviting ambiance that welcomes you to explore at
     your leisure. We believe in the power of a beautifully crafted shopping
     experience, and that's exactly what you'll find here. Join us in
     celebrating the art of shopping. Gilded Rose is more than just a shop; it's
     a destination for those who appreciate the finer things in life. Visit us
     today, and let your shopping adventure begin!
    </Paragraph>
   </Container>
  </Grid>
 );
}
