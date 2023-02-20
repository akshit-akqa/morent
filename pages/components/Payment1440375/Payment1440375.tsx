import React from 'react'
import Apply from './Apply/Apply'
import Bottom from './Bottom/Bottom'
import styles from './Payment1440375.module.scss'
import Summary from './Summary/Summary'
import Total from './Total/Total'
function Payment1440375() {
  return (
    <div className={styles.main}>
        <Summary/>
        <div className={styles.total}>
        <Total name="Subtotal" price={80.00}/>
        <Total name="Tax" price={0}/>   
        </div>
        <Apply/> 
        <Bottom/>
    </div>
  )
}

export default Payment1440375