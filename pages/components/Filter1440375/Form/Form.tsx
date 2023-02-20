import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Form.module.scss";
import mark from '../../../assets/Mark.svg'
import Image from "next/image";
function Form() {
  return (
    <div className={styles.formDiv}>
      <p className={styles.title}><Image src={mark} className={styles.mark} alt="mark"/>Pick-Up</p>
      <div className={styles.dropdownDiv}>
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default Form;
