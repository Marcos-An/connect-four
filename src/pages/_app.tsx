import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Connect-Four</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
