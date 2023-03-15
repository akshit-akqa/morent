import React from "react";
import Avatar from "react-avatar";
import styles from "./Intro.module.scss";
import ReactStars from "react-rating-stars-component";
import { useWindowWidth } from "@react-hook/window-size";

type review = {
  avatar: string;
  name: string;
  designation: string;
  date: string;
};

function Intro({ avatar, name, designation, date }: review) {
  const onlyWidth = useWindowWidth();
  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Avatar
          src={avatar}
          className={styles.avatar}
          size={onlyWidth > 767 ? "3.8vw" : "44px"}
        />
        <div className={styles.intro}>
        <span className={styles.name}>{name}</span>
        <span className={styles.designation}>{designation}</span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.date}>{date}</span>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={onlyWidth > 767 ? 20 : 12}
          activeColor="#FBAD39"
          className={styles.stars}
        />
      </div>
    </div>
  );
}

export default Intro;
