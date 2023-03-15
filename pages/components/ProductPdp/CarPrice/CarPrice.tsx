import React from "react";
import styles from "./CarPrice.module.scss";
type price = {
  price: string
}
const CarPrice = ({price}:price) => {
  return (
    <div className={styles.priceWrap}>
      <div className={styles.price}>
        <span className={styles.money}>${price}.00/</span>
        <span className={styles.perday}>day</span>
      </div>
      <button className={styles.button}>Rent Now</button>
    </div>
  );
};

export default CarPrice;
