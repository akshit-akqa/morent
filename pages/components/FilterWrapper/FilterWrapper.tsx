import Image from 'next/image'
import React from 'react'
import FilterForm from '../FilterForm/FilterForm'
import Switch from './../../assets/Switch.svg'
import styles from './FilterWrapper.module.scss'
function FilterWrapper() {
  return (
    <div className={styles.FilterWrap}>
        <FilterForm/>
        <Image src={Switch} alt="Switch Icon"/>
        <FilterForm/>
    </div>
  )
}

export default FilterWrapper