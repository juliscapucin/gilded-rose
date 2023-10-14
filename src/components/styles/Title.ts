import { styled } from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';

const Title = styled.h1<{ $marginMobile?: boolean }>`
   font-size: var(--text-display);
   margin-top: ${({ $marginMobile }) =>
      $marginMobile ? 'var(--top-margin)' : '0'};
   margin-bottom: calc(var(--global-spacing) * 5);
`;

export default Title;
