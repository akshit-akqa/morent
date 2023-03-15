import React from "react";
import styles from "./RentalSummary.module.scss";
import look from "../../assets/Avatars/Look.svg";
import ReactStars from "react-rating-stars-component";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
const RentalSummary = () => {
  const onlyWidth = useWindowWidth();
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        Rental Summary
        <div className={styles.body}>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.Img}>
          <Image src={look} alt="look" className={styles.look} />
        </div>
        <div className={styles.info}>
          Nissan GT-R
          <div className={styles.review}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={onlyWidth > 767 ? 20 : 12}
              activeColor="#FBAD39"
              className={styles.stars}
            />
            <div className={styles.reviewText}>440+ Reviewer</div>
          </div>
        </div>
      </div>
      <div className={styles.Total}>
        <div className={styles.total}>
          <span className={styles.grey}>Subtotal</span>
          <span className={styles.black}>$80.00</span>
        </div>
        <div className={styles.total}>
          <span className={styles.grey}>Tax</span>
          <span className={styles.black}>$0</span>
        </div>
      </div>
      <input placeholder="Apply promo code" className={styles.input} />
      <div className={styles.bottom}>
        <div className={styles.left}>
          Total Rental Price
          {onlyWidth > 767 ?
          <div className={styles.overall}>
            Overall price and includes rental discount
          </div>
          :
          <div className={styles.overall}>Overall price rental</div>}
        </div>
        <div className={styles.right}>$80.00</div>
      </div>
    </div>
  );
};

export default RentalSummary;
