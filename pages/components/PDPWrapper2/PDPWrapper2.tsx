import React from 'react'
import Popular1440375 from '../Popular1440375/Popular1440375'
import Recommend1440375 from '../Recommend1440375/Recommend1440375'
import Reviews1440375 from '../Reviews1440375/Reviews1440375'
import Wrap from '../Wrap/Wrap'
import styles from './PDPWrapper2.module.scss'
function PDPWrapper2() {
  return (
    <div className={styles.main}>
        <Reviews1440375/>
        <Popular1440375/>
        <Wrap/>
        <Recommend1440375/>
        <Wrap/>        
    </div>
  )
}

export default PDPWrapper2