import { GamePiece } from '@components/atoms/GamePiece'
import { useContext, useEffect, useState } from 'react'
import { GameContext } from 'src/Contexts/gameContext'
import styles from './board.module.scss'

export function Board() {
  const [counter, setCounter] = useState(30)
  const gameContext = useContext(GameContext)
  const { board, playHandle, currentPlayer, handlePlayers } = gameContext

  const resetTimer = () => {
    handlePlayers()
    setCounter(30)
  }

  useEffect(() => {
    counter === 0 && resetTimer()
  }, [counter])

  useEffect(() => {
    const timerID = setInterval(() => setCounter(counter - 1), 1000)
    return () => clearInterval(timerID)
  })

  return (
    <div className={styles.container}>
      {board.map((_, lineIndex) =>
        board[lineIndex].map((cel, cellIndex) => (
          <GamePiece
            onClick={() => {
              playHandle(lineIndex, cellIndex)
              setCounter(30)
            }}
            player={cel.player}
            key={`${lineIndex}-${cellIndex}`}
          />
        ))
      )}
      <div
        className={
          currentPlayer === 1
            ? styles.gameStatusPlayerOne
            : styles.gameStatusPlayerTwo
        }
      >
        <h4>PLAYER {currentPlayer}'S TURN</h4>
        <h1>{`${counter}s`}</h1>
      </div>
    </div>
  )
}
