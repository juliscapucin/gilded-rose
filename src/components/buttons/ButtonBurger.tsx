import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

import { breakpoints } from '@/lib/constants';

interface ButtonBurgerProps {
 action: MouseEventHandler<HTMLButtonElement>;
}

const StyledButtonBurger = styled.button`
 position: fixed;
 z-index: 20;
 top: calc(var(--global-spacing) * 2);
 right: calc(var(--global-spacing) * 2);
 width: calc(var(--global-spacing) * 5);
 height: 24px;
 margin-right: var(--global-spacing);
 background-color: transparent;
 border: none;
 cursor: pointer;
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: var(--global-spacing);

 @media (min-width: ${breakpoints.tablet}) {
  display: none;
 }

 .line {
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
 }
`;

export default function ButtonBurger({ action }: ButtonBurgerProps) {
 return (
  <StyledButtonBurger onClick={action}>
   <div className='line'></div>
   <div className='line'></div>
  </StyledButtonBurger>
 );
}
