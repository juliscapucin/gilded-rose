'use client';

import styled, { ThemeProvider } from 'styled-components';

import { useEffect, useState } from 'react';

import { StyledComponentsRegistry, themes } from '@/lib';
import { GildedRoseContextProvider } from '@/context';

import { AnimationOverlay, Footer, Header, Loader, Meta } from '@/components';
import { GlobalStyles, Subtitle } from '@/components/styles';

const StyledBody = styled.body`
 background-color: ${({ theme }) => theme.colors.primary};
 color: ${({ theme }) => theme.colors.secondary};
 margin: 0 auto;
`;

const StyledMain = styled.main`
 padding: 0 calc(var(--global-spacing) * 3) calc(var(--global-spacing) * 3)
  calc(var(--global-spacing) * 3);
`;

export default function RootLayout(props: { children: React.ReactNode }) {
 const [homeTheme, setHomeTheme] = useState(themes.dark);

 useEffect(() => {
  let theme = sessionStorage.getItem('theme');
  if (!theme) theme = 'dark';
  theme === 'dark' ? setHomeTheme(themes.dark) : setHomeTheme(themes.light);
 }, []);

 return (
  <html lang='en'>
   <title>Gilded Rose</title>
   <Meta />
   <StyledComponentsRegistry>
    <GlobalStyles />
    <ThemeProvider theme={homeTheme}>
     <StyledBody>
      <AnimationOverlay />
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
