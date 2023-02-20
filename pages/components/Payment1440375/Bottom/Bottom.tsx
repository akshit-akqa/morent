import React from "react";
import styles from "./Bottom.module.scss";
import { useWindowWidth } from "@react-hook/window-size";
function Bottom() {
  const onlyWidth = useWindowWidth();
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <span className={styles.heading}>Total Rental Price</span>
        <span className={styles.text}>
        {onlyWidth > 767 ? "Overall price and includes rental discount" : "Overall price rental"}
          
        </span>
      </div>
      <div className={styles.right}>$80.00</div>
    </div>
  );
}

export default Bottom;
{/* {onlyWidth > 767 ? Overall price and includes rental discount : Overall price rental*/}