import React from "react";
import styles from "./DropdownForm.module.scss";
import mark from "../../assets/Mark.svg";
import Image from "next/image";
import Dropdown from "./Dropdown/Dropdown";
type ddf = {
    title: string;
}
const DropdownForm = ({title}:ddf) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <Image src={mark} alt="mark" className={styles.mark} />
        {title}
      </div>
      <div className={styles.form}>
      <Dropdown field="Locations" />
      <Dropdown field="Date" />
      <Dropdown field="Time" />
      </div>
    </div>
  );
};

export default DropdownForm;
