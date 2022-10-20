import styles from './icons.module.scss'

export const PlayerVsCPUIcon = () => {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.leftFaceIconPlayerVsCPUIcon}>
        <div className={styles.leftEyesPlayerVsCPUIcon}>
          <div />
          <div />
        </div>
        <div className={styles.leftSmileContainerPlayerVsCPUIcon} />
      </div>

      <div className={styles.rightFaceIconPlayerVsCPUIcon}>
        <div className={styles.rightEyesPlayerVsCPUIcon}>
          <div />
          <div />
        </div>
        <div className={styles.rightSmileContainerPlayerVsCPUIcon} />
      </div>
    </div>
  )
}

export const PlayerVsPlayerIcon = () => {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.leftFaceIconPlayerVsPlayerIcon}>
        <div className={styles.eyesPlayerVsPlayerIcon}>
          <div />
          <div />
        </div>
        <div className={styles.smileContainerPlayerVsPlayerIcon} />
      </div>

      <div className={styles.rightFaceIconPlayerVsPlayerIcon}>
        <div className={styles.eyesPlayerVsPlayerIcon}>
          <div />
          <div />
        </div>
        <div className={styles.smileContainerPlayerVsPlayerIcon} />
      </div>
    </div>
  )
}
