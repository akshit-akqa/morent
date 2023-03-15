import React from 'react'
import styles from './CName.module.scss'
import heart from '../../../assets/HeaderIcons/Wishlist.svg'
import Image from 'next/image'

const CName = () => {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <span className={styles.name}>All New Rush</span>
            <Image src={heart} alt="car" className={styles.heart}/>
        </div>
        <div className={styles.type}>SUV</div>
    </div>
  )
}

export default CName