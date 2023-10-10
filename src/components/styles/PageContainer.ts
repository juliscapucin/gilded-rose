import { styled } from 'styled-components';

const Container = styled.section`
   grid-column: 7 / span 5;
   margin-top: 300px;

   h1 {
      font-size: var(--text-display);
      margin-bottom: calc(var(--global-spacing) * 3);
   }
`;

export default Container;
