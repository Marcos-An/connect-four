import styles from './genericButton.module.scss'

export function HeaderButton({ children }: { children: React.ReactNode }) {
  return <button className={styles.button}>{children}</button>
}
