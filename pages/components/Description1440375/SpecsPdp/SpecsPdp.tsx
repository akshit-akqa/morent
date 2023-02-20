import React from 'react'
import styles from './SpecsPdp.module.scss'
type specsProps = {
    property:string,
    value:string
}
function SpecsPdp({property,value}:specsProps) {
  return (
    <div className={styles.main}>
        <span className={styles.key}>{property}</span>
        <span className={styles.value}>{value}</span>
    </div>
  )
}

export default SpecsPdp