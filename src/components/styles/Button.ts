import styled from 'styled-components';

interface ButtonProps {
   variant: 'primary' | 'secondary';
   theme: { colors: { secondary: string; primary: string } };
}

const Button = styled.button<ButtonProps>`
   margin: calc(var(--global-spacing) * 2) auto;
   min-width: var(--button-min-width);
   background-color: ${({ variant, theme }) =>
      variant === 'primary'
         ? `${theme.colors.secondary}`
         : `${theme.colors.primary}`};
   color: ${({ variant, theme }) =>
      variant === 'primary'
         ? `${theme.colors.primary}`
         : `${theme.colors.secondary}`};
   border: 1px solid ${({ theme }) => theme.colors.secondary};
   border-radius: 3px;
   padding: var(--global-spacing) calc(var(--global-spacing) * 2);
   font-size: var(--font-size-medium);
   cursor: pointer;
   transition: background-color 0.3s var(--ease-in-out);

   &:hover {
      color: ${({ variant, theme }) =>
         variant === 'primary'
            ? `${theme.colors.secondary}`
            : `${theme.colors.primary}`};
      background-color: ${({ variant, theme }) =>
         variant === 'primary'
            ? `${theme.colors.primary}`
            : `${theme.colors.secondary}`};
   }
`;

export default Button;
