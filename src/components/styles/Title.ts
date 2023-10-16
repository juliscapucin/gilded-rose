import { styled } from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';

const Title = styled.h1<{ $margin?: boolean }>`
   font-size: var(--text-display);
   margin-top: ${({ $margin }) =>
      $margin ? 'var(--top-margin)' : 'calc(var(--global-spacing) * 5)'};
   margin-bottom: calc(var(--global-spacing) * 5);
`;

export default Title;
