'use client';

import StyledComponentsRegistry from '@/lib/styles-registry';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import Header from '@/components/Header';

const themes = {
 dark: {
  colors: {
   primary: '#0070f3',
   secondary: '#ff00ff',
  },
 },
 light: {
  colors: {
   primary: '#0070f3',
   secondary: '#ff00ff',
  },
 },
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html>
   <StyledComponentsRegistry>
    <ThemeProvider theme={themes.dark}>
     <body>
      <Header />
      {children}
     </body>
    </ThemeProvider>
   </StyledComponentsRegistry>
  </html>
 );
}
