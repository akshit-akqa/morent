import React, { useState } from "react";
import styles from "./../../styles/card/CardTop.module.scss";
import { HeartIcon } from "@heroicons/react/24/solid";
function CardTop() {
  const [heart, setHeart] = useState(false);
  return (
    <div className={styles.cardTop}>
      <div className={styles.cardTopRow}>
        <span className={styles.carTitle}>Koenigsegg</span>
        <span
          className={styles.wishList}
          onClick={() => {
            if (heart) setHeart(false);
            else setHeart(true);
            //console.log(heart);
          }}
        >
          <HeartIcon className={heart ? styles.wishList1 : styles.wishList2} />
        </span>
      </div>
      <div className={styles.type}>Sport</div>
    </div>
  );
}

export default CardTop;
