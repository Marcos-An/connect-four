import '../styles/globals.css'
import styles from './app.module.scss'
import { BottomContainer } from '@components/atoms/BottomContainer'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Component {...pageProps} />
      <BottomContainer />
    </div>
  )
}

export default MyApp
