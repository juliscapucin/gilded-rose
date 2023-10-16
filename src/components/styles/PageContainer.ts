import { styled } from 'styled-components';
import { breakpoints } from '@/lib/styles-constants';

const PageContainer = styled.section`
   grid-column: 5 / span 6;
   padding-left: calc(var(--global-spacing) * 2);

   @media (min-width: ${breakpoints.desktop}) {
      grid-column: 6 / span 5;
      padding-left: 0;
   }
`;

export default PageContainer;
