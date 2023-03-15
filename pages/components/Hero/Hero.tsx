import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.scss'
import car from '../../assets/image7.svg'
import { type } from 'os'
type BannerProps = {
  title:string
  body:string
  imageUrl: string

}
const Hero = ({title, body, imageUrl}:BannerProps) => {
  return (
    // <div className={styles.main}>
    //     <div className={styles.title}>The Best Platform for Car Rental</div>
    //     <div className={styles.description}>Ease of doing a car rental safely and reliably. Of course at a low price.</div>
    //     <button className={styles.button}>Rental Car</button>
    //     <Image src={car} alt="car" className={styles.car}/>
    // </div>
    <div className={styles.main}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{body}</div>
        <button className={styles.button}>Rental Car</button>
        <Image src={imageUrl} alt="car" className={styles.car}/>
    </div>
  )
}

export default Hero