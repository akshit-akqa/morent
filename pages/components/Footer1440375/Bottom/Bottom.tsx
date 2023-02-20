import React from "react";
import styles from "./Bottom.module.scss";
function Bottom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.allRights}>
        <span className={styles.bottomText}>
          &#xA9;2022MORENT. All rights reserved
        </span>
      </div>
      <div className={styles.allRights2}>
        <span className={styles.bottomText}>Privacy & Policy</span>
      </div>
      <div className={styles.allRights3}>
        <span className={styles.bottomText}>Terms & Condition</span>
      </div>
    </div>
  );
}

export default Bottom;
