import React from 'react'
import styles from './FooterTop.module.scss'
function FooterTop() {
  return (
    <div className={styles.top}>
        <span className={styles.logo}>MORENT</span>
        <span className={styles.brandLine}>Our vision is to provide convenience and help increase your sales business.</span>
    </div>
  )
}

export default FooterTop