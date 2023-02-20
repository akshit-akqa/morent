import React from 'react'
import styles from './SearchBar.module.scss'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline'
function SearchBar() {
  return (
    <div>
        <MagnifyingGlassIcon className={styles.search}/>
        <input className={styles.searchBar} type="text" placeholder='Search something here'></input>
        {/* <AdjustmentsHorizontalIcon className={styles.filter}/> */}
    </div>
  )
}

export default SearchBar