import styles from './logo.module.scss'

export function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.round} />
      <div className={styles.round} />
      <div className={styles.round} />
      <div className={styles.round} />
    </div>
  )
}
