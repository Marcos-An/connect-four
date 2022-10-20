import { Check } from 'phosphor-react'
import styles from './rules.module.scss'
import { useRouter } from 'next/router'

export default function Rules() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.rulesContainer}>
        <h1>RULES</h1>

        <h3>OBJECTIVE</h3>
        <p>
          Be the first player to connect 4 of the same colored discs in the row
          (either vertically, horizontally or diagnally).
        </p>
        <h3>HOW TO PLAY</h3>
        <p>
          <span>1 </span>Red goas first in the first game.
        </p>
        <p>
          <span>2 </span>Players must alternate turns, and only one disc can be
          dropped in each turn.
        </p>
        <p>
          <span>3 </span>The game ends when there is a 4-in-a-row or a
          statement.
        </p>
        <p>
          <span>4 </span>The starter of the previous game goes second on the
          next game
        </p>
      </div>
      <div className={styles.backButton} onClick={() => router.back()}>
        <Check />
      </div>
    </div>
  )
}
