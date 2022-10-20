import styles from './home.module.scss'
import { Header } from '@components/molecules/Header'
import { Board } from '@components/molecules/Board'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.playerOneContainer} />
      <div className={styles.boardContainer}>
        <Header />

        <Board />
      </div>
      <div className={styles.playerTwoContainer} />
    </div>
  )
}
