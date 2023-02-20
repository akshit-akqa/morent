import React from "react";
import styles from "./Header1440375.module.scss";
import HeaderBar from "./HeaderBar/HeaderBar";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
function Header1440375() {
  return (
    <div className={styles.wrapperHead}>
      <div className={styles.wrapperHeaderTop}>
        <HeaderLogo />
        <HeaderIcons />
      </div>
      <div className={styles.bar}><HeaderBar/></div>
    </div>
  );
}

export default Header1440375;
