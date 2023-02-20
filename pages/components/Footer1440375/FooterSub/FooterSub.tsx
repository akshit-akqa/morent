import React from "react";
import styles from "./FooterSub.module.scss";
function FooterSub() {
  return (
    <div className={styles.sub}>
      <span className={styles.heading}>About</span>

      <span className={styles.subHeading}>How it Works</span>
      <span className={styles.subHeading}>Featured</span>
      <span className={styles.subHeading}>Partnership</span>
      <span className={styles.subHeading}>Business</span>
    </div>
  );
}

export default FooterSub;
