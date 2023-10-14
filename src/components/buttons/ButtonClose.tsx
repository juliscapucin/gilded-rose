import { styled } from 'styled-components';

interface ButtonCloseProps {
 action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButtonClose = styled.button`
 position: fixed;
 top: calc(var(--global-spacing) * 2);
 right: calc(var(--global-spacing) * 2);
 z-index: 20;
 width: calc(var(--global-spacing) * 5);
 height: calc(var(--global-spacing) * 5);

 .line {
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  &:first-child {
   top: 50%;
   transform: translateY(-50%) rotate(45deg);
  }
  &:last-child {
   top: 50%;
   transform: translateY(-50%) rotate(-45deg);
  }
 }
`;

export default function ButtonClose({ action }: ButtonCloseProps) {
 return (
  <StyledButtonClose onClick={(e) => action(e)}>
   <div className='line'></div>
   <div className='line'></div>
  </StyledButtonClose>
 );
}
