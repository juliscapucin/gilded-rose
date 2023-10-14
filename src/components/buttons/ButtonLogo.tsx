import Link from 'next/link';
import { styled } from 'styled-components';

const StyledButtonLogo = styled.button`
 font-size: 60px;
 font-weight: var(--font-weight-ultra-light);
 color: ${({ theme }) => theme.colors.secondary};

 a {
  display: flex;
  gap: 0;
  transition: gap 0.2s ease-in-out;

  &:hover {
   gap: calc(var(--global-spacing) * 2);
  }
 }
`;

export default function ButtonLogo() {
 return (
  <StyledButtonLogo>
   <Link href='/'>
    <span>G</span>
    <span>–</span>
    <span>R</span>
   </Link>
  </StyledButtonLogo>
 );
}
