import Image from 'next/image'
import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import Switch from './../../assets/Switch.svg'
import styles from './Filter1440375.module.scss'
import Form from './Form/Form'
function Filter1440375() {
  return (
    <div className={styles.filter1440375}>
      <Form/>
      <Image src={Switch} alt="Switch Icon" className={styles.switch}/>
      <Form/>
    </div>
  )
}

export default Filter1440375