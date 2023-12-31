import { styled } from 'styled-components';

import { breakpoints } from '@/lib/styles-constants';

const NavLink = styled.button`
   position: relative;
   display: block;
   padding: 0 calc(var(--global-spacing) * 0.5);
   color: ${({ theme }) => theme.colors.secondary};
   font-size: var(--text-medium);

   &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: scaleY(0);
      transform-origin: bottom;
      border-radius: 2px;
      transition: transform 0.2s ease-in-out;
      z-index: -1;
   }
   &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};

      &::before {
         transform: scaleY(1);
      }
   }

   @media (max-width: ${breakpoints.desktop}) {
      font-size: var(--text-large);
   }
`;

export default NavLink;
