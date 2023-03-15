import React from "react";
import CName from "./CName/CName";
import car from "../../assets/plp/rush.svg";
import Image from "next/image";
import styles from "./ProductRecommend.module.scss";
import CarSpecs from "./CarSpecs/CarSpecs";
import CarPrice from "./CarPrice/CarPrice";

interface ICard1440375Props {
  name?: string;
  type: string;
  mileage: string;
  transmission: string;
  space: string;
  price: string;
  url: string;
}

const ProductRecommend = () => {
  return (
    <div className={styles.product}>
      <CName />
      <div className={styles.rec}>
        <div className={styles.gaadi}>
          <Image src={car} alt="car" className={styles.car} />
        </div>
        <CarSpecs />
      </div>
      <CarPrice />
    </div>
  );
};

export default ProductRecommend;
