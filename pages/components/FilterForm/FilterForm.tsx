import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import styles from "./FilterForm.module.scss";
function FilterForm() {
  return (
    <div className={styles.mainForm}>
      <span className={styles.formSection}>Pick-Up</span>
      <div className={styles.selectContainer}>
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default FilterForm;
