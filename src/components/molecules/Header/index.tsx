import { Logo } from '@components/atoms/Logo'
import { HeaderButton } from '@components/atoms/GenericButton'
import styles from './header.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <HeaderButton>MENU</HeaderButton>
      <Logo />
      <HeaderButton>RESTART</HeaderButton>
    </div>
  )
}
