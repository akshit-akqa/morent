import React from 'react'
import styles from './Button.module.scss'
function Button() {
  return (
    <div className={styles.button}>
        <button className={styles.rent}>Rent Now</button>
    </div>
  )
}

export default Button