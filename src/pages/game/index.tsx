import styles from './game.module.scss'
import { Header } from '@components/molecules/Header'
import { Board } from '@components/molecules/Board'
import PlayerCard from '@components/molecules/PlayerCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.gameWrapper}>
        <div className={styles.playerOneContainer}>
          <PlayerCard player={1} />
        </div>
        <div className={styles.boardContainer}>
          <Header />
          <Board />
        </div>
        <div className={styles.playerTwoContainer}>
          <PlayerCard player={2} />
        </div>
      </div>
      <div className={styles.bottom} />
    </div>
  )
}
