import React from "react";
import styles from "./FormHeading.module.scss";
type form = {
  heading: string;
  step: number;
  action: string;
};
function FormHeading({ heading, step, action }: form) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <span className={styles.heading}>{heading}</span>
        <span className={styles.action}>{action}</span>
      </div>
      <div className={styles.right}>{`Step ${step} of 4`}</div>
    </div>
  );
}

export default FormHeading;
