import React from 'react'
import styles from './Total.module.scss'
type props = {
    name: string
    price: number
}
function Total({name, price}:props) {
  return (
    <div className={styles.main}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price==80 ? `$${price}.00`:`$${price}`}</span>
    </div>
  )
}

export default Total