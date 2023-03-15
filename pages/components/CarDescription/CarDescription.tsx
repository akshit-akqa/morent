import Image from "next/image";
import React from "react";
import heart from "../../assets/HeaderIcons/Wishlist.svg";
import styles from "./CarDescription.module.scss";
import ReactStars from "react-rating-stars-component";
import { useWindowWidth } from "@react-hook/window-size";
const CarDescription = () => {
  const onlyWidth = useWindowWidth();
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        Nissan GT-R
        <Image src={heart} alt="heart" className={styles.heart} />
      </div>
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
      <div className={styles.description}>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <span className={styles.featureName}>Type Car</span>
          <span className={styles.value}>Sport</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureName}>Capacity</span>
          <span className={styles.value}>2 Person</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureName}>Steering</span>
          <span className={styles.value}>Manual</span>
        </div>
        <div className={styles.feature}>
          <span className={styles.featureName}>Gasoline</span>
          <span className={styles.value}>70L</span>
        </div>
      </div>
      <div className={styles.priceWrap}>
        <div className={styles.price}>
          <span className={styles.price99}>$80.00/</span>
          <span className={styles.perday}>days</span>
          <div>
            <span className={styles.striked}>$100.00</span>
          </div>
        </div>
        <button className={styles.rent}>Rent Now</button>
      </div>
    </div>
  );
};

export default CarDescription;
