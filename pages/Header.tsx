import React from "react";
import styles from "../styles/Header.module.scss";
import Avatar from "react-avatar";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <>
      <div className={styles.header}>
        <span className={styles.heading}>MORENT</span>
        <MagnifyingGlassIcon className={styles.searchIcon}/>
        <input className={styles.searchBar} type="text" placeholder='Search something here'></input>
        <AdjustmentsHorizontalIcon className={styles.filterIcon} height="10px"/>
        <Avatar name="Genius" className={styles.avatar} size="35px" color="blue" />
      </div>
    </>
  );
}

export default Header;

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV
