'use client';

import StyledComponentsRegistry from '@/lib/styles-registry';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Meta } from '@/components';
import { GlobalStyles } from '@/components/styles';

const themeDark = {
 colors: {
  primary: '#2b0808',
  secondary: '#f16000',
 },
};

const themeLight = {
 colors: {
  primary: '#c39999',
  secondary: '#c30000',
 },
};

const StyledBody = styled.body`
 background-color: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.secondary};
`;

const StyledMain = styled.main`
 padding: 0 calc(var(--global-spacing) * 3) calc(var(--global-spacing) * 3)
  calc(var(--global-spacing) * 3);
`;

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html>
   <Meta />
   <StyledComponentsRegistry>
    <GlobalStyles />
    <ThemeProvider theme={themeDark}>
     <StyledBody>
      <Header />
      <StyledMain>{children}</StyledMain>
     </StyledBody>
    </ThemeProvider>
   </StyledComponentsRegistry>
  </html>
 );
}
