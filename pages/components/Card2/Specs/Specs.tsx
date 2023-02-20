import React from 'react'
import styles from './Specs.module.scss'
import gas from "../../../assets/gas-station.svg";
import transm from "../../../assets/Transmission.svg";
import user from "../../../assets/profile-2user.svg";
import Image from 'next/image';
type specs = {
  mileage: string;
  transmission: string;
  space: string
}
function Specs({mileage, transmission, space}: specs) {
  return (
    <div className={styles.specs}>
        <Image
        src={gas}
        alt="Mileage"
        width={14}
        height={14}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>{mileage}</span>
      <Image
        src={transm}
        alt="Tra"
        width={14}
        height={14}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>{transmission}</span>
      <Image
        src={user}
        alt="User"
        width={14}
        height={14}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>{space} People</span>
    </div>
  )
}

export default Specs