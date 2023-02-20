import React from "react";
import first from "../assets/gas-station.svg";
import second from "../assets/Transmission.svg";
import third from "../assets/profile-2user.svg";
import styles from "./../../styles/card/CardGreyIcons.module.scss";
import Image from "next/image";
function CardGreyIcons() {
  return (
    <div className={styles.CardGreyIcons}>
      <Image
        src={first}
        alt="Mileage"
        width={50}
        height={40}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>90L</span>

      <Image
        src={second}
        alt="Transmission"
        width={50}
        height={40}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>Manual</span>

      <Image
        src={third}
        alt="People"
        width={50}
        height={40}
        className={styles.greyIcon}
      />
      <span className={styles.cardGreyText}>2 People</span>
    </div>
  );
}

export default CardGreyIcons;
