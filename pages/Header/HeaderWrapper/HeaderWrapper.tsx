import React from "react";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./HeaderWrapper.module.scss";
function HeaderWrapper() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerWrapperLeft}>
        <Logo />
        <SearchBar />
      </div>
      <div className={styles.headerWrapperRight}><HeaderIcons/></div>
    </div>
  );
}

export default HeaderWrapper;
