import React from 'react'
import styles from '../styles/Banner.module.scss'
import BannerCard from './BannerCard'
import mycar1 from './assets/Car1.svg'
import mycar2 from './assets/Car2.svg'
function Banner() {
  return (
    <div className={styles.bannerDiv}>
        <BannerCard />
    </div>
  )
}

export default Banner