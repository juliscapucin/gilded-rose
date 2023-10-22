import { Metadata } from 'next';

import { RootLayout } from '@/components';

export const metadata: Metadata = {
 title: { default: 'Gilded Rose', template: '%s | Gilded Rose' },
 description:
  'We are a small inn with a prime location. We buy and sell only the finest goods.',
 icons: {
  icon: '/favicon-16x16.png',
  shortcut: '/shortcut-icon.png',
  apple: '/apple-touch-icon.png',
 },
 themeColor: [
  { media: '(prefers-color-scheme: light)', color: '#cccccc' },
  { media: '(prefers-color-scheme: dark)', color: '#222222' },
 ],
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   'max-video-preview': -1,
   'max-image-preview': 'large',
   'max-snippet': -1,
  },
 },
};

export default function Layout(props: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <RootLayout>{props.children}</RootLayout>
  </html>
 );
}
