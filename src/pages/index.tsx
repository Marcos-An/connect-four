import { Logo } from '@components/atoms/Logo'
import {
  PlayerVsCPUIcon,
  PlayerVsPlayerIcon
} from '@components/molecules/MenuIcons'
import styles from './home.module.scss'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Home() {
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.playerVsCpu} onClick={() => goTo('/game')}>
        <h3>PLAYER VS CPU</h3>
        <PlayerVsCPUIcon />
      </div>

      <div className={styles.playerVsPlayer} onClick={() => goTo('/game')}>
        <h3>PLAYER VS PLAYER</h3>
        <PlayerVsPlayerIcon />
      </div>

      <div className={styles.gameRules} onClick={() => goTo('/rules')}>
        <h3>GAME RULES</h3>
      </div>
    </div>
  )
}
