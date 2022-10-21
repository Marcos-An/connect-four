interface cell {
  cel: number
  player: number | undefined
}

export const checkWin = (
  lineIndex: number,
  cellIndex: number,
  player: number,
  board: cell[][]
) => {
  if (
    checkLine(lineIndex, player, board) ||
    checkColumn(cellIndex, player, board) ||
    checkDiagonalRight(lineIndex, cellIndex, player, board) ||
    checkDiagonalLeft(lineIndex, cellIndex, player, board)
  ) {
    return true
  }
}

export const checkDrawn = (board: cell[][]) => {
  let isDrawn = board.filter(
    (row) => row.filter((item) => item.player === undefined).length > 0
  )

  return isDrawn.length > 0 ? false : true
}

const checkDiagonalRight = (
  lineIndex: number,
  cellIndex: number,
  currentPlayer: number,
  board: cell[][]
) => {
  let rowStartFrom = lineIndex
  let columnStartFrom = cellIndex
  let consecutiveCells = 0

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
  currentPlayer: number,
  board: cell[][]
) => {
  const indexDiff = lineIndex + 1 - (cellIndex + 1)
  let rowStartFrom = 0
  let columnStartFrom = 0
  let consecutiveCells = 0

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

const checkColumn = (
  cellIndex: number,
  currentPlayer: number,
  board: cell[][]
) => {
  let consecutiveCells = 0

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

const checkLine = (
  lineIndex: number,
  currentPlayer: number,
  board: cell[][]
) => {
  let consecutiveCells = 0

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
