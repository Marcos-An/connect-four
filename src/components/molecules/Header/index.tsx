import { Logo } from '@components/atoms/Logo'
import { HeaderButton } from '@components/atoms/GenericButton'
import styles from './header.module.scss'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GameContext } from 'src/Contexts/gameContext'

export function Header() {
  const gameContext = useContext(GameContext)
  const { restart } = gameContext

  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <div className={styles.container}>
      <HeaderButton onClick={() => goTo('/')}>MENU</HeaderButton>
      <Logo />
      <HeaderButton onClick={() => restart()}>RESTART</HeaderButton>
    </div>
  )
}
