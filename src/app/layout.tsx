import StyledComponentsRegistry from '@/lib/registry'
import {ThemeProvider} from 'styled-components'
import Header from '@/components/Header'

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff00ff',
  },
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <ThemeProvider theme={theme}>
      <body>
        <StyledComponentsRegistry>
          <Header/>
          {children}</StyledComponentsRegistry>
      </body>
    </ThemeProvider>
    </html>
  )
}