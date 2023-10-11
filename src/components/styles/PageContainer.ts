import { styled } from 'styled-components';

interface PageContainerProps {
   variant: 'page' | 'image' | 'list';
   theme: { colors: { secondary: string; primary: string } };
}

const Container = styled.section<PageContainerProps>`
   grid-column: 7 / span 5;
   margin-top: 300px;

   h1 {
      font-size: var(--text-display);
      margin-bottom: calc(var(--global-spacing) * 3);
   }
`;

export default Container;
