import React from "react";
import Button from "../Button/Button";
import styles from "./Price.module.scss";
type price = {
  price: string
}
function Price({price}: price) {
  return (
    <div className={styles.priceWrap}>
      <div className={styles.price}>
        <span className={styles.price99}>${price}.00/</span>
        <span className={styles.perday}>day</span>
      </div>

      <Button />
    </div>
  );
}

export default Price;
