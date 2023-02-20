import React from 'react'
import styles from './../../styles/card/RentButton.module.scss'
function RentButton() {
  return (
    <div className={styles.rentButtonDiv}>
        <button className={styles.rent}>Rental Car</button>
    </div>
  )
}

export default RentButton