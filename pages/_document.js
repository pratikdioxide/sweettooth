import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="description" content="Sweet Tooth – Premium home bakery in Ghaziabad. Eggless cakes, cookies, doughnuts, brownies & more. FSSAI registered. No preservatives." />
        <meta property="og:title" content="Sweet Tooth | Home Bakery" />
        <meta property="og:description" content="Eggless cakes, biscuits, chocolates, premixes and more — baked at home with love." />
        <link rel="icon" href="https://idecutionmarketing.com/sweettooth/assets/images/Sweet-Tooth-Logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
