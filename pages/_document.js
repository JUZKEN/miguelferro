import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#232025"/>
          <meta name="msapplication-TileColor" content="#232025"/>
          <meta name="theme-color" content="#232025"></meta>
          <meta name="description" content="Hi. I am Miguel. I am a 21 years old passionate UI/UX Designer & Web Developer. Be sure to look at some of the projects I've worked on over the past years!"></meta>
          <meta name="author" content="Miguel Ferro"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument