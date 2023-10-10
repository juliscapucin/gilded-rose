import { styled } from 'styled-components';

const Grid = styled.div`
   display: block;

   @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
   }
`;

export default Grid;
