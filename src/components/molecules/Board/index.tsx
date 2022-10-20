import { GamePiece } from '@components/atoms/GamePiece'
import { useState } from 'react'
import styles from './board.module.scss'
import { BOARD_START } from '@utils/board'

export function Board() {
  const [player, setPlayer] = useState(2)
  const [board] = useState(BOARD_START)

  const handle = (lineIndex: number, cellIndex: number) => {
    const hasPlayerOnCell = board[lineIndex][cellIndex].player

    if (!hasPlayerOnCell) {
      if (player === 1) {
        board[lineIndex][cellIndex].player = 2
        setPlayer(2)
      } else {
        board[lineIndex][cellIndex].player = 1
        setPlayer(1)
      }
    }

    const currentPlayer = board[lineIndex][cellIndex].player

    checkWin(lineIndex, cellIndex, currentPlayer)
  }

  const checkWin = (lineIndex: number, cellIndex: number, player: number) => {
    if (
      checkLine(lineIndex, player) ||
      checkColumn(cellIndex, player) ||
      checkDiagonalRight(lineIndex, cellIndex, player) ||
      checkDiagonalLeft(lineIndex, cellIndex, player)
    ) {
      alert('Player ' + player + ' wins')
    }
  }

  const checkDiagonalRight = (
    lineIndex: number,
    cellIndex: number,
    currentPlayer: number
  ) => {
    var rowStartFrom = lineIndex
    var columnStartFrom = cellIndex
    var consecutiveCells = 0

    for (let j = 0; j < board.length; j++) {
      const line = board[lineIndex - j]
      const column = line ? line[cellIndex + j] : undefined

      if (column) {
        rowStartFrom = lineIndex - j
        columnStartFrom = cellIndex + j
      } else {
        break
      }
    }

    for (let i = 0; i < board.length; i++) {
      const line = board[rowStartFrom + i]

      if (line) {
        if (line[columnStartFrom - i]?.player === currentPlayer) {
          consecutiveCells++

          if (consecutiveCells >= 4) {
            return true
          }
        } else {
          consecutiveCells = 0
        }
      }
    }

    return false
  }

  const checkDiagonalLeft = (
    lineIndex: number,
    cellIndex: number,
    currentPlayer: number
  ) => {
    const indexDiff = lineIndex + 1 - (cellIndex + 1)
    var rowStartFrom = 0
    var columnStartFrom = 0
    var consecutiveCells = 0

    if (indexDiff > 0) {
      rowStartFrom = indexDiff
    } else if (indexDiff < 0) {
      columnStartFrom = Math.abs(indexDiff)
    }

    for (let i = 0; i < board.length; i++) {
      const line = board[rowStartFrom + i]

      if (line) {
        if (line[columnStartFrom + i]?.player === currentPlayer) {
          consecutiveCells++

          if (consecutiveCells >= 4) {
            return true
          }
        } else {
          consecutiveCells = 0
        }
      }
    }

    return false
  }

  const checkColumn = (cellIndex: number, currentPlayer: number) => {
    var consecutiveCells = 0

    for (let i = 0; i < board.length; i++) {
      if (board[i][cellIndex].player === currentPlayer) {
        consecutiveCells++

        if (consecutiveCells >= 4) {
          return true
        }
      } else {
        consecutiveCells = 0
      }
    }
    return false
  }

  const checkLine = (lineIndex: number, currentPlayer: number) => {
    var consecutiveCells = 0

    for (let i = 0; i < board[lineIndex].length; i++) {
      if (board[lineIndex][i].player === currentPlayer) {
        consecutiveCells++

        if (consecutiveCells >= 4) {
          return true
        }
      } else {
        consecutiveCells = 0
      }
    }

    return false
  }

  return (
    <div className={styles.container}>
      {board.map((_, lineIndex) =>
        board[lineIndex].map((cel, cellIndex) => (
          <GamePiece
            onClick={() => handle(lineIndex, cellIndex)}
            player={cel.player}
            key={`${lineIndex}-${cellIndex}`}
          />
        ))
      )}
    </div>
  )
}
