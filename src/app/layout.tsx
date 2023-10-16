'use client';

import styled, { ThemeProvider } from 'styled-components';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { StyledComponentsRegistry, themes } from '@/lib';
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

const StyledAnimationOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 50;
 background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function RootLayout(props: { children: React.ReactNode }) {
 const [homeTheme, setHomeTheme] = useState(themes.dark);

 useEffect(() => {
  const theme = sessionStorage.getItem('theme');
  theme === 'dark' ? setHomeTheme(themes.dark) : setHomeTheme(themes.light);
 }, []);

 return (
  <html>
   <Meta />
   <StyledComponentsRegistry>
    <GlobalStyles />
    <ThemeProvider theme={homeTheme}>
     <StyledBody>
      <StyledAnimationOverlay data-animation-overlay> </StyledAnimationOverlay>
      <Header />
      <StyledMain>
       <GildedRoseContextProvider>{props.children}</GildedRoseContextProvider>
      </StyledMain>
      <Footer />
     </StyledBody>
    </ThemeProvider>
   </StyledComponentsRegistry>
  </html>
 );
}
