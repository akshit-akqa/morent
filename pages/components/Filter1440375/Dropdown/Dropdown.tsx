import React from 'react'
import styles from './Dropdown.module.scss'
function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <span className={styles.label}>Locations</span>
      <select name="Locations" className={styles.select1}>
        <option>Select your city</option>
      </select>
    </div>
  )
}

export default Dropdown