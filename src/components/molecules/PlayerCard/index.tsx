import styles from './playerCard.module.scss'
import { useContext } from 'react'
import { GameContext } from 'src/Contexts/gameContext'
interface Player {
  player: 'playerOne' | 'playerTwo'
}

export default function PlayerCard({ player }: Player) {
  const gameContext = useContext(GameContext)
  const { playersScore } = gameContext

  return (
    <div className={styles.container}>
      <div
        className={
          player === 'playerOne'
            ? styles.faceIconPlayerOne
            : styles.faceIconPlayerTwo
        }
      >
        <div
          className={
            player === 'playerOne' ? styles.eyesPlayerOne : styles.eyesPlayerTwo
          }
        >
          <div />
          <div />
        </div>
        <div
          className={
            player === 'playerOne'
              ? styles.smileContainerPlayerOner
              : styles.smileContainerPlayerTwo
          }
        />
      </div>
      <h3>PLAYER {player === 'playerOne' ? '1' : '2'}</h3>
      <h1>{playersScore[player]}</h1>
    </div>
  )
}
