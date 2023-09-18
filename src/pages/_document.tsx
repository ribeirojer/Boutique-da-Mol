import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        {/*<title>Boutique da Moh</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />*/}
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        <link href="img/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
