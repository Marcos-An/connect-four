import styles from './genericButton.module.scss'

interface props {
  children: React.ReactNode
  onClick?: Function
}
export function HeaderButton({ children, onClick }: props) {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  )
}
