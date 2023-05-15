import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from Tcapsmovies photos and the Archives."
          />
          <meta property="og:site_name" content="Discordgg.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Tcapsmovies photos and the Archives."
          />
          <meta property="og:title" content="Tcapsmovies 2023 Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Tcapsmovies 2023 Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from Tcapsmovies photos and the Archives."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
