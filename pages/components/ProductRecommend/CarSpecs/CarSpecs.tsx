import React from "react";
import styles from "./CarSpecs.module.scss";
import icon1 from "../../../assets/specs/capacity.svg";
import icon2 from "../../../assets/specs/gas-station.svg";
import icon3 from "../../../assets/specs/transmission.svg";
import Image from "next/image";
const CarSpecs = () => {
  return (
    <div className={styles.specs}>
      <div className={styles.cardGreyText}>
        <Image
          src={icon2}
          alt="Mileage"
          width={20}
          height={20}
          className={styles.greyIcon}
        />
       
        90L
      </div>
      <div className={styles.cardGreyText}>
        <Image
          src={icon3}
          alt="Tra"
          width={20}
          height={20}
          className={styles.greyIcon}
        />Manual
      </div>
      <div className={styles.cardGreyText}>
        <Image
          src={icon1}
          alt="User"
          width={20}
          height={20}
          className={styles.greyIcon}
        />
        4 People
      </div>
    </div>
  );
};

export default CarSpecs;
