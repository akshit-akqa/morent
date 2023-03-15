import React from "react";
import Avatar from "react-avatar";
import styles from "./Reviews1440375.module.scss";
import man from "../../assets/Avatars/Ladka.svg";
import woman from "../../assets/Avatars/Ladki.svg";
import { useWindowWidth } from "@react-hook/window-size";
import Intro from "./Intro/Intro";

function Reviews1440375() {
  const onlyWidth = useWindowWidth();
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <span className={styles.reviews}>Reviews</span>
        <span className={styles.count}>13</span>
      </div>
      <div className={styles.reviewWrap}>
        <div className={styles.p}>
          <Intro
            avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            name="Alex Stanton"
            designation="CEO at Bukalapak"
            date="21 July 2022"
          />
          {onlyWidth > 767 ? (
            <div className={styles.review}>
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </div>
          ) : (
            <div className={styles.review}>
              We are very happy with the service from the MORENT App. Morent has
              a low price . . .
            </div>
          )}
        </div>
        <div>
          <Intro
            avatar="http://starsunfolded.com/wp-content/uploads/2018/02/Kiran-Bedi-2.jpg"
            name="Skylar Dias"
            designation="CEO at Amazon"
            date="20 July 2022"
          />
          {onlyWidth > 767 ? (
            <div className={styles.review}>
              We are greatly helped by the services of the MORENT Application.
              Morent has low prices and also a wide variety of cars with good
              and comfortable facilities. In addition, the service provided by
              the officers is also very friendly and very polite.
            </div>
          ) : (
            <div className={styles.review}>
              We are greatly helped by the services of the MORENT Application.
              Morent has a low . . .
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Reviews1440375;
