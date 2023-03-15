import React from "react";
import styles from "./HeaderMobile.module.scss";
import Image from "next/image";
import pro from "../../assets/HeaderIcons/Profil.svg";
import search from "../../assets/HeaderIcons/search-normal.svg";
import filter from "../../assets/HeaderIcons/filter.svg";
const HeaderMobile = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.heading}>MORENT</div>
        <Image src={pro} alt="s" className={styles.IconHeader} />
      </div>
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
  );
};

export default HeaderMobile;
