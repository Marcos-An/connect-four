import styles from './gamePiece.module.scss'

interface props {
  onClick: Function
  player: number
}
export function GamePiece({ onClick, player }: props) {
  return (
    <div
      className={
        !player
          ? styles.default
          : player === 1
          ? styles.playerOne
          : styles.playerTwo
      }
      onClick={() => onClick()}
    />
  )
}
