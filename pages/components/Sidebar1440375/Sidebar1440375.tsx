import React from "react";
import styles from "./Sidebar1440375.module.scss";
function Sidebar1440375() {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <span className={styles.heading}>TYPE</span>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            Sport<span className={styles.quantity}> (10)</span>
          </span>
        </div>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            SUV<span className={styles.quantity}> (12)</span>
          </span>
        </div>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            MPV<span className={styles.quantity}> (16)</span>
          </span>
        </div>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            Sedan<span className={styles.quantity}> (20)</span>
          </span>
        </div>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            Coupe<span className={styles.quantity}> (14)</span>
          </span>
        </div>
        <div className={styles.categories}>
          <input className={styles.input} type="checkbox" />
          <span className={styles.type}>
            Hatchback<span className={styles.quantity}>(14)</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar1440375;
