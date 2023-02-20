import React from 'react'
import styles from './Button.module.scss'
function Button() {
  return (
    <div className={styles.buttonDiv}>
        <button className={styles.button}>Rental Car</button>
    </div>
  )
}

export default Button