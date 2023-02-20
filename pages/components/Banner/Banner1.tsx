import React from "react";
import RentButton from "../../card/RentButton";
import styles from "./Banner1.module.scss";
import car from '../../assets/Car2.svg'
import Image from "next/image";
function Banner1() {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.banner}>
        <div className={styles.bannerMainLine}>
          The Best Platform for Car Rental
        </div>
        <div className={styles.bannerText}>
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </div>
        <RentButton />
      </div>
      <div className={styles.imageDiv}>
      <Image src={car} className={styles.bannerImage1}/>
      </div>
    </div>
  );
}

export default Banner1;
