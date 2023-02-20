import React, { useState } from "react";
import styles from "./Description1440375.module.scss";
import { HeartIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-rating-stars-component";
import SpecsPdp from "./SpecsPdp/SpecsPdp";
import Button from "../Card1440375/Button/Button";
import { useWindowWidth } from "@react-hook/window-size";
function Description1440375() {
  const onlyWidth = useWindowWidth();
  const [heart, setHeart] = useState(false);
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <span className={styles.Name}>Nissan GT-R</span>
        <span
          className={styles.wishList}
          onClick={() => {
            if (heart) setHeart(false);
            else setHeart(true);
            console.log(heart);
          }}
        >
          <HeartIcon className={heart ? styles.wishList1 : styles.wishList2} />
        </span>
      </div>
      <div className={styles.secondRow}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={onlyWidth > 767 ? 20 : 12}
          activeColor="#FBAD39"
          className={styles.stars}
        />
        <span className={styles.reviewCount}>440+ Reviewer</span>
      </div>
      <p className={styles.description}>
        NISMO has become the embodiment of Nissan's outstanding performance,
        inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className={styles.specsWrap}>
        <SpecsPdp property="Type Car" value="Sport" />
        <SpecsPdp property="Capacity" value="2 Person" />
        <SpecsPdp property="Steering" value="Manual" />
        <SpecsPdp property="Gasoline" value="70L" />
      </div>
      <div className={styles.priceWrap}>
        <div className={styles.price}>
          <span className={styles.price99}>$80.00/</span>
          <span className={styles.perday}>days</span>
          <div>
            <span className={styles.striked}>$100.00</span>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.rent}>Rent Now</button>
        </div>
      </div>
    </div>
  );
}

export default Description1440375;
