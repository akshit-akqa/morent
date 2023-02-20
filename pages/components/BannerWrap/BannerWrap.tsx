import React from 'react'
import Banner1 from '../Banner/Banner1'
import styles from './BannerWrap.module.scss'
function BannerWrap() {
  return (
    <div className={styles.bannerWrap}>
        <Banner1/>
        <Banner1/>
    </div>
  )
}

export default BannerWrap