import { ButtonLogo } from '@/components/buttons';
import { styled } from 'styled-components';
import { NavLinks, SocialLinks } from '@/components';
import { breakpoints } from '@/lib/styles-constants';

const StyledFooter = styled.footer`
 padding: calc(var(--global-spacing) * 20) calc(var(--global-spacing) * 3)
  calc(var(--global-spacing) * 10);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 border-top: 1px solid ${({ theme }) => theme.colors.secondary};

 @media (min-width: ${breakpoints.desktop}) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--global-spacing) * 10);
 }
`;

export default function Footer() {
 return (
  <StyledFooter>
   <NavLinks variant='footer' />
   <SocialLinks />
   <div>
    <ButtonLogo />
    <div>
     <span>© 2023 Gilded Rose</span>
    </div>
   </div>
  </StyledFooter>
 );
}
