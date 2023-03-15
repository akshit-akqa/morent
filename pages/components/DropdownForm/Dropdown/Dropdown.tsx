import React from 'react'
import styles from './Dropdown.module.scss'

type dropdown = {
    field: string;
    // option: string;
}

const Dropdown = ({field}:dropdown) => {
  return (
    <div className={styles.field}>
            <span className={styles.fieldname}>{field}</span>
            <select placeholder="Akshit bhai" className={styles.select}>
                <option>07.00</option>
            </select>
        </div>
  )
}

export default Dropdown