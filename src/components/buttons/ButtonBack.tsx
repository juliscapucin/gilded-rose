import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

import { NavLink } from '@/components/styles';
import { exitPageTransition } from '@/animations';

const StyledButtonBack = styled.div`
 grid-column: 1 / span 11;
 color: ${({ theme }) => theme.colors.secondary};
 margin-top: var(--top-margin);
 margin-bottom: var(--global-spacing);
`;

export default function ButtonBack() {
 const router = useRouter();

 return (
  <StyledButtonBack>
   <NavLink onClick={() => exitPageTransition(() => router.push('/products'))}>
    Back to Products
   </NavLink>
  </StyledButtonBack>
 );
}
