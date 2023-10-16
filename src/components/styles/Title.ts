import { styled } from 'styled-components';

const Title = styled.h1<{ $margin?: boolean }>`
   font-size: var(--text-display);
   margin-top: ${({ $margin }) =>
      $margin ? 'var(--top-margin)' : 'calc(var(--global-spacing) * 5)'};
   margin-bottom: calc(var(--global-spacing) * 5);
   display: inline-block;
   padding: calc(var(--global-spacing) * 2) 0;
   overflow: hidden;
`;

export default Title;
