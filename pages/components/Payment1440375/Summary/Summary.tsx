import Image from "next/image";
import React from "react";
import styles from "./Summary.module.scss";
import car from "../../../assets/Avatars/Look.svg";
import ReactStars from "react-rating-stars-component";
import { useWindowWidth } from "@react-hook/window-size";
function Summary() {
  const onlyWidth = useWindowWidth();
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.heading}>Rental Summary</div>
        <div className={styles.text}>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className={styles.carSection}>
        <Image src={car} alt="car" className={styles.carImage} />
        <div className={styles.carDetails}>
          <span className={styles.name}>Nissan GT-R</span>
          <div className={styles.other}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={onlyWidth > 767 ? 20 : 12}
              activeColor="#FBAD39"
              className={styles.stars}
            />
            <span className={styles.reviewCount}>440+ Reviewer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
