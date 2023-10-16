import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';

interface ButtonBurgerProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

const StyledButtonBurger = styled.button`
 width: calc(var(--global-spacing) * 5);
 height: calc(var(--global-spacing) * 5);
 margin-right: var(--global-spacing);
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: var(--global-spacing);

 .line {
  pointer-events: none;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
 }
`;

export default function ButtonBurger({ action }: ButtonBurgerProps) {
 return (
  <StyledButtonBurger onClick={action} aria-label='Open Menu'>
   <div className='line'></div>
   <div className='line'></div>
  </StyledButtonBurger>
 );
}
