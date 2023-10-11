import styled from 'styled-components';

interface ButtonProps {
   variant: 'primary' | 'secondary';
   theme: { colors: { secondary: string; primary: string } };
}

const Button = styled.button<ButtonProps>`
   margin: calc(var(--global-spacing) * 2) auto;
   min-width: var(--button-min-width);
   background-color: ${(props: ButtonProps) =>
      props.variant === 'primary'
         ? `${props.theme.colors.secondary}`
         : `${props.theme.colors.primary}`};
   color: ${(props: ButtonProps) =>
      props.variant === 'primary'
         ? `${props.theme.colors.primary}`
         : `${props.theme.colors.secondary}`};
   border: 1px solid ${(props: ButtonProps) => props.theme.colors.secondary};
   border-radius: 3px;
   padding: var(--global-spacing) calc(var(--global-spacing) * 2);
   font-size: var(--font-size-medium);
   cursor: pointer;
   transition: background-color 0.3s var(--ease-in-out);

   &:hover {
      color: ${(props: ButtonProps) =>
         props.variant === 'primary'
            ? `${props.theme.colors.secondary}`
            : `${props.theme.colors.primary}`};
      background-color: ${(props: ButtonProps) =>
         props.variant === 'primary'
            ? `${props.theme.colors.primary}`
            : `${props.theme.colors.secondary}`};
   }
`;

export default Button;
