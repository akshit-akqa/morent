import React from "react";
import styles from "./../../styles/card/Price.module.scss"
function Price() {
  return (
    <div className={styles.PriceDiv}>
      <span className={styles.price}>$99.00/</span>
      <span className={styles.perday}>day</span>
    </div>
  );
}

export default Price;
