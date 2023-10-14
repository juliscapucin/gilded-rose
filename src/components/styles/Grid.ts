import { styled } from 'styled-components';
import { breakpoints } from '@/lib/styles-constants';

const Grid = styled.div`
   display: block;

   @media (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
   }
`;

export default Grid;
