import React, { useState } from "react";
import styles from "./Name.module.scss";
import { HeartIcon } from "@heroicons/react/24/solid";
type top={
  name: string
  type: string
}
function Name({name,type}:top) {
  const [heart, setHeart] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <span className={styles.Name}>{name}</span>
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
      <div className={styles.Type}>{type}</div>
    </div>
  );
}

export default Name;
