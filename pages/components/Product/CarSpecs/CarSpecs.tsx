import React from "react";
import styles from "./CarSpecs.module.scss";
import icon1 from "../../../assets/specs/capacity.svg";
import icon2 from "../../../assets/specs/gas-station.svg";
import icon3 from "../../../assets/specs/transmission.svg";
import Image from "next/image";
type specs = {
  mileage: string;
  transmission: string;
  space: string
}
const CarSpecs = ({mileage, transmission, space}: specs) => {
  return (
    <div className={styles.specs}>
      <div>
        <Image
          src={icon2}
          alt="Tra"
          width={20}
          height={20}
          className={styles.greyIcon}
        />

        <span className={styles.cardGreyText}>{mileage}</span>
      </div>
      <div>
        <Image
          src={icon3}
          alt="User"
          width={20}
          height={20}
          className={styles.greyIcon}
        />

        <span className={styles.cardGreyText}>{transmission}</span>
      </div>
      <div>
        <Image
          src={icon1}
          alt="Mileage"
          width={20}
          height={20}
          className={styles.greyIcon}
        />
        <span className={styles.cardGreyText}>{space} People</span>
      </div>
    </div>
  );
};

export default CarSpecs;
