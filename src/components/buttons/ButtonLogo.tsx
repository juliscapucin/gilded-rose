import { usePathname, useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { exitPageTransition } from '@/animations';

const StyledButtonLogo = styled.button`
 font-size: 60px;
 font-weight: var(--font-weight-ultra-light);
 color: ${({ theme }) => theme.colors.secondary};
 display: flex;
 gap: 0;
 transition: gap 0.2s ease-in-out;

 &:hover {
  gap: calc(var(--global-spacing) * 2);
 }
`;

export default function ButtonLogo() {
 const router = useRouter();

 return (
  <StyledButtonLogo onClick={() => exitPageTransition(() => router.push('/'))}>
   <span>G</span>
   <span>–</span>
   <span>R</span>
  </StyledButtonLogo>
 );
}
