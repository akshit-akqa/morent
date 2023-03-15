import React from "react";
import styles from "./CarPrice.module.scss";
const CarPrice = () => {
  return (
    <div className={styles.priceWrap}>
      <div className={styles.price}>
        <span className={styles.money}>$96.00/</span>
        <span className={styles.perday}>day</span>
      </div>
      <button className={styles.button}>Rental Now</button>
    </div>
  );
};

export default CarPrice;
