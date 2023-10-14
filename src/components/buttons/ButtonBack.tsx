import Link from 'next/link';
import { styled } from 'styled-components';

const StyledButtonBack = styled.div`
 grid-column: 1 / span 11;
 color: ${({ theme }) => theme.colors.secondary};
 margin-top: var(--top-margin);
 margin-bottom: var(--global-spacing);
`;

export default function ButtonBack() {
 return (
  <StyledButtonBack>
   <Link href='/products'>Back</Link>
  </StyledButtonBack>
 );
}
