import React, { useState } from "react";
import Image from "next/image";
import mycar from "./assets/gaadi.svg";
import first from "./assets/gas-station.svg";
import second from "./assets/Transmission.svg";
import third from "./assets/profile-2user.svg";
import { HeartIcon } from "@heroicons/react/24/solid";
import styles from "../styles/Card.module.scss";
import CardTop from "./card/CardTop";
import CardGreyIcons from "./card/CardGreyIcons";
import Price from "./card/Price";
import RentButton from "./card/RentButton";
function Card() {
  const [heart, setHeart] = useState(false);

  return (
    <div className={styles.card}>
      {/* <div className={styles.cardTop}>
        <span className={styles.carTitle}>Koenigsegg</span>
        <span
          className={styles.wishList}
          onClick={() => {
            if (heart) setHeart(false);
            else setHeart(true);
            //console.log(heart);
          }}
        >
          <HeartIcon className={heart ? styles.wishList1 : styles.wishList2} />
        </span>
      </div>
      <div className={styles.type}>Sport</div>
      <div className="imageDiv">
        <Image
          src={mycar}
          alt="Picture of the author"
          width={350}
          height={300}
          className={styles.carImage}
        />
      </div>
      <div className={styles.threeIcons}>
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
      <div className={styles.lowerCard}>
        <div className={styles.lowerCardLeft}>
          <span className={styles.price}>$99.00/</span>
          <span className={styles.perday}>day</span>
        </div>
        <div className={styles.lowerCardRight}>
          <button className={styles.RentNow}>Rent Now</button>
        </div>
      </div> */}
      <CardTop />
      <>
        <Image
          src={mycar}
          alt="Picture of the author"
          // width={350}
          // height={300}
          className={styles.carImage}
        />
        <CardGreyIcons />
      </>
      <div className={styles.lowerCard}>
        <Price />
        <RentButton />
      </div>
    </div>
  );
}

export default Card;
