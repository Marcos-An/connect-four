import styles from './playerCard.module.scss'

interface Player {
  player: number
}
export default function PlayerCard({ player }: Player) {
  return (
    <div className={styles.container}>
      <div
        className={
          player === 1 ? styles.faceIconPlayerOne : styles.faceIconPlayerTwo
        }
      >
        <div
          className={player === 1 ? styles.eyesPlayerOne : styles.eyesPlayerTwo}
        >
          <div />
          <div />
        </div>
        <div
          className={
            player === 1
              ? styles.smileContainerPlayerOner
              : styles.smileContainerPlayerTwo
          }
        />
      </div>
      <h3>PLAYER 1</h3>
      <h1>12</h1>
    </div>
  )
}
