import Link from 'next/link';
import { styled } from 'styled-components';

import { breakpoints } from '@/lib/constants';

type ButtonLogoProps = { isMobile?: boolean };

const StyledButtonLogo = styled.button<{ $isMobile?: boolean }>`
 font-size: 60px;
 font-weight: var(--font-weight-ultra-light);
 color: ${({ theme }) => theme.colors.secondary};

 @media (min-width: ${breakpoints.tablet}) {
  display: ${({ $isMobile }) => ($isMobile ? 'none' : 'block')};
 }

 a {
  display: flex;
  gap: 0;
  transition: gap 0.2s ease-in-out;

  &:hover {
   gap: calc(var(--global-spacing) * 2);
  }
 }
`;

export default function ButtonLogo({ isMobile }: ButtonLogoProps) {
 return (
  <StyledButtonLogo $isMobile={isMobile}>
   <Link href='/'>
    <span>G</span>
    <span>–</span>
    <span>R</span>
   </Link>
  </StyledButtonLogo>
 );
}
