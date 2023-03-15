import React from "react";
import styles from "./HeaderComp.module.scss";
import search from "../../assets/HeaderIcons/search-normal.svg";
import filter from "../../assets/HeaderIcons/filter.svg";
import Image from "next/image";
import Like from "../../assets/HeaderIcons/Like.svg";
import Notification from "../../assets/HeaderIcons/Notification.svg";
import Settings from "../../assets/HeaderIcons/Settings.svg";
import pro from '../../assets/HeaderIcons/Profil.svg'
import Avatar from "react-avatar";
const HeaderComp = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.heading}>MORENT</div>
        <div className={styles.searchDiv}>
          <Image src={search} alt="search" className={styles.search} />
          <input
            className={styles.searchbar}
            placeholder="Search something here"
          ></input>
          <div className={styles.filterDiv}>
            <Image src={filter} alt="filter" className={styles.filter} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={Like} alt="Like" className={styles.IconHeader} />
        <Image
          src={Notification}
          alt="Notification"
          className={styles.IconHeader}
        />
        <Image src={Settings} alt="Settings" className={styles.IconHeader} />
        <Image src={pro} alt="s" className={styles.IconHeader}/>
      </div>
    </div>
  );
};

export default HeaderComp;