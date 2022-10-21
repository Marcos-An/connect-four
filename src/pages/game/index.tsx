import styles from './game.module.scss'
import { Header } from '@components/molecules/Header'
import { Board } from '@components/molecules/Board'
import PlayerCard from '@components/molecules/PlayerCard'

export default function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.gameWrapper}>
        <div className={styles.playerOneContainer}>
          <PlayerCard player={'playerOne'} />
        </div>
        <div className={styles.boardContainer}>
          <Header />
          <Board />
        </div>
        <div className={styles.playerTwoContainer}>
          <PlayerCard player={'playerTwo'} />
        </div>
      </div>
      <div className={styles.bottom} />
    </div>
  )
}
