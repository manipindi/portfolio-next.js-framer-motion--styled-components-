import { Html, Head, Main, NextScript } from "next/document";
// import fav from '../public/favicon.svg'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mani Pindi</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
