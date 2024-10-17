import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
          <link
            rel='icon'
            href='/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            href='/apple-touch-icon.png'
          />
          <link
            rel='manifest'
            href='/manifest.json'
          />
          <meta
            name='theme-color'
            content='#000000'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;