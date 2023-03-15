import React from 'react'
import styles from './CName.module.scss'
import heart from '../../../assets/HeaderIcons/Wishlist.svg'
import Image from 'next/image'
type cname = {
  name: string
  type: string
}
const CName = ({name, type}:cname) => {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <span className={styles.name}>{name}</span>
            <Image src={heart} alt="car" className={styles.heart}/>
        </div>
        <div className={styles.type}>{type}</div>
    </div>
  )
}

export default CName