import styles from './CardWrapper.module.scss'
import React from 'react'
import Card from '../../Card'

function CardWrapper() {
  return (
    <div className={styles.cardWrapper}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardWrapper