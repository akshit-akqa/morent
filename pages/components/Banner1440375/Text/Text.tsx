import React from 'react'
import styles from './Text.module.scss'
import { useWindowWidth } from "@react-hook/window-size";

interface textProps{
  title:string
  body:string 
}
function Text({title,body}:textProps) {
    const onlyWidth = useWindowWidth()
  return (
    <div className={styles.textMainDiv}>
        {/* <p className={styles.Title}>The Best Platform{onlyWidth > 767 ? <br/>: ""} for Car Rental</p> */}
        <p className={styles.Title}>{title}</p>
        <p className={styles.Para}>{body}</p>
    </div>
  )
}

export default Text