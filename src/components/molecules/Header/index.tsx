import { Logo } from '@components/atoms/Logo'
import { HeaderButton } from '@components/atoms/GenericButton'
import styles from './header.module.scss'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <div className={styles.container}>
      <HeaderButton onClick={() => goTo('/')}>MENU</HeaderButton>
      <Logo />
      <HeaderButton>RESTART</HeaderButton>
    </div>
  )
}
