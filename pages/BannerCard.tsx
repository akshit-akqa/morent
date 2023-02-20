import React from "react";
import Image from "next/image";
import mycar from "./assets/Car1.svg";
import styles from "../styles/BannerCard.module.scss"
function BannerCard() {
  return (
    <div className={styles.banner}>
      <span className={styles.bannerTitle}>
        The Best Platform for Car Rental
      </span>
      <span className={styles.bannerText}>
        Ease of doing a car rental safely and reliably. Ofcourse at a low price.
      </span>
      <button className={styles.bannerButton}>Rental Car</button>

      <Image
        src={mycar}
        alt="Picture of the car"
        width={300}
        height={200}
        className={styles.bannerImage}
      />
    </div>
  );
}

export default BannerCard;
