import { styled } from 'styled-components';

import { breakpoints } from '@/lib/constants';

const NavLink = styled.div`
   a {
      position: relative;
      display: block;
      padding: 0 calc(var(--global-spacing) * 0.5);

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
         transition: all 0.2s ease-in-out 0s;
      }
      &:hover {
         text-decoration: none;
         color: ${({ theme }) => theme.colors.primary};

         &::before {
            transform: scaleY(1);
            z-index: -1;
         }
      }

      @media (max-width: ${breakpoints.desktop}) {
         font-size: var(--text-subtitle);
      }
   }
`;

export default NavLink;
