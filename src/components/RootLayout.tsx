'use client';

import styled, { ThemeProvider } from 'styled-components';

import { useEffect, useState } from 'react';

import { StyledComponentsRegistry, themes } from '@/lib';
import { GildedRoseContextProvider } from '@/context';

import { AnimationOverlay, Footer, Header } from '@/components';
import { GlobalStyles } from '@/components/styles';

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
  <StyledComponentsRegistry>
   <GlobalStyles />
   <ThemeProvider theme={homeTheme}>
    <StyledBody>
     <AnimationOverlay />
     <GildedRoseContextProvider>
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
     </GildedRoseContextProvider>
    </StyledBody>
   </ThemeProvider>
  </StyledComponentsRegistry>
 );
}
