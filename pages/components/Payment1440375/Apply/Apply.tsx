import React from 'react'
import styles from './Apply.module.scss'
function Apply() {
  return (
    <div className={styles.apply}>
        <input className={styles.input} placeholder='Apply promo code'></input>
        <button className={styles.button}>Apply Now</button>
    </div>
  )
}

export default Apply