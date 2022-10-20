import '../styles/globals.css'
import Head from 'next/head'
import { GameContextProvider } from 'src/Contexts/gameContext'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Connect-Four</title>
      </Head>
      <GameContextProvider>
        <Component {...pageProps} />
      </GameContextProvider>
    </div>
  )
}

export default MyApp
