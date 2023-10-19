import { Metadata } from 'next';

import { RootLayout } from '@/components';

export const metadata: Metadata = {
 title: 'Gilded Rose',
 description:
  'We are a small inn with a prime location. We buy and sell only the finest goods.',
 icons: {
  icon: '/favicon-16x16.png',
  shortcut: '/shortcut-icon.png',
  apple: '/apple-touch-icon.png',
 },
 robots: {
  index: false,
  follow: true,
  nocache: true,
  googleBot: {
   index: true,
   follow: false,
   noimageindex: true,
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
