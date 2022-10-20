import { BOARD_START } from '@utils/board'
import { checkWin } from '@utils/checkWin'
import { createContext, ReactNode, useState } from 'react'

interface cell {
  cel: number
  player: number | undefined
}

interface GameContextData {
  board: cell[][]
  currentPlayer: number
  playHandle: (lineIndex: number, cellIndex: number) => void
}

export const GameContext = createContext({} as GameContextData)

type GameContextProviderProps = {
  children: ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1)
  const [board] = useState(BOARD_START)

  const playHandle = (lineIndex: number, cellIndex: number) => {
    const hasPlayerOnCell = board[lineIndex][cellIndex].player
    const player = currentPlayer

    if (!hasPlayerOnCell) {
      if (currentPlayer === 1) {
        board[lineIndex][cellIndex].player = 1
        setCurrentPlayer(2)
      } else {
        board[lineIndex][cellIndex].player = 2
        setCurrentPlayer(1)
      }
    }

    checkWin(lineIndex, cellIndex, player, board)
  }

  return (
    <GameContext.Provider value={{ board, currentPlayer, playHandle }}>
      {children}
    </GameContext.Provider>
  )
}
