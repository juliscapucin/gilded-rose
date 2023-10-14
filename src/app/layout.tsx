'use client';

import { StyledComponentsRegistry, themeDark, themeLight } from '@/lib';
import styled, { ThemeProvider } from 'styled-components';
import { GildedRoseContextProvider } from '@/context';

import { Footer, Header, Meta } from '@/components';
import { GlobalStyles } from '@/components/styles';

const StyledBody = styled.body`
 background-color: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.secondary};
`;

const StyledMain = styled.main`
 padding: 0 calc(var(--global-spacing) * 3) calc(var(--global-spacing) * 3)
  calc(var(--global-spacing) * 3);
`;

export default function RootLayout(props: {
 children: React.ReactNode;
 shallowModal: React.ReactNode;
}) {
 return (
  <html>
   <Meta />
   <StyledComponentsRegistry>
    <GlobalStyles />
    <ThemeProvider theme={themeDark}>
     <StyledBody>
      <Header />
      <StyledMain>
       <GildedRoseContextProvider>
        {props.children}
        {props.shallowModal}
       </GildedRoseContextProvider>
      </StyledMain>
      <Footer />
     </StyledBody>
    </ThemeProvider>
   </StyledComponentsRegistry>
  </html>
 );
}
