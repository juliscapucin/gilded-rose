import Head from 'next/head';

export default function Meta() {
 return (
  <Head>
   <link
    rel='apple-touch-icon'
    sizes='180x180'
    href='/favicon/apple-touch-icon.png'
   />
   <link
    rel='icon'
    type='image/png'
    sizes='32x32'
    href='/favicon/favicon-32x32.png'
   />
   <link
    rel='icon'
    type='image/png'
    sizes='16x16'
    href='/favicon/favicon-16x16.png'
   />
   <link rel='manifest' href='/favicon/site.webmanifest' />
   <link
    rel='mask-icon'
    href='/favicon/safari-pinned-tab.svg'
    color='#000000'
   />
   <link rel='shortcut icon' href='/favicon/favicon.ico' />
   <meta name='msapplication-TileColor' content='#000000' />
   <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
   <meta name='theme-color' content='#000' />
   <meta name='Gilded Rose' content={`We buy and sell only the finest goods`} />
   <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
   <link rel='stylesheet' href='https://use.typekit.net/cbg5juo.css' />
   {/* <meta property='og:image' content={HOME_OG_IMAGE_URL} key='ogImage' /> */}
  </Head>
 );
}