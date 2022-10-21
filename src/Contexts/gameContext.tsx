import { BOARD_START } from '@utils/board'
import { checkWin } from '@utils/checkWin'
import { createContext, ReactNode, useState, useEffect } from 'react'

interface cell {
  cel: number
  player: number | undefined
}

interface PlayerScoreType {
  playerOne: number
  playerTwo: number
}
interface GameContextData {
  board: cell[][]
  playersScore: PlayerScoreType
  currentPlayer: number
  playHandle: (lineIndex: number, cellIndex: number) => void
  restart: () => void
}

export const GameContext = createContext({} as GameContextData)

type GameContextProviderProps = {
  children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [playersScore, setPlayersScore] = useState<PlayerScoreType>({
    playerOne: 0,
    playerTwo: 0
  })
  const [currentPlayer, setCurrentPlayer] = useState<number>(1)
  const [board, setBoard] = useState(BOARD_START)

  const playHandle = (lineIndex: number, cellIndex: number) => {
    const hasPlayerOnCell = board[lineIndex][cellIndex].player
    const player = currentPlayer
    const newBoard = [...board]

    if (!hasPlayerOnCell && isPlaying) {
      if (currentPlayer === 1) {
        newBoard[lineIndex][cellIndex].player = 1
        setBoard(newBoard)
        setCurrentPlayer(2)
      } else {
        newBoard[lineIndex][cellIndex].player = 2
        setBoard(newBoard)
        setCurrentPlayer(1)
      }
    }

    if (checkWin(lineIndex, cellIndex, player, board)) {
      const newScore = { ...playersScore }

      if (player === 1) {
        newScore.playerOne = newScore.playerOne + 1
      } else {
        newScore.playerTwo = newScore.playerTwo + 1
      }

      setPlayersScore(newScore)
      setIsPlaying(false)
    }
  }

  const restart = () => {
    console.log(BOARD_START)
    setBoard(BOARD_START)
  }
  return (
    <GameContext.Provider
      value={{ board, currentPlayer, playHandle, playersScore, restart }}
    >
      {children}
    </GameContext.Provider>
  )
}
