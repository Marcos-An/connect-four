import { GamePiece } from '@components/atoms/GamePiece'
import { useContext } from 'react'
import { GameContext } from 'src/Contexts/gameContext'
import styles from './board.module.scss'

export function Board() {
  const gameContext = useContext(GameContext)
  const { board, playHandle } = gameContext

  return (
    <div className={styles.container}>
      {board.map((_, lineIndex) =>
        board[lineIndex].map((cel, cellIndex) => (
          <GamePiece
            onClick={() => playHandle(lineIndex, cellIndex)}
            player={cel.player}
            key={`${lineIndex}-${cellIndex}`}
          />
        ))
      )}
    </div>
  )
}
