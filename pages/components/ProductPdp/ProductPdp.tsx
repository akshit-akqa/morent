import React from "react";
import CName from "./CName/CName";
import car from "../../assets/image7.svg";
import Image from "next/image";
import styles from "./ProductPdp.module.scss";
import CarSpecs from "./CarSpecs/CarSpecs";
import CarPrice from "./CarPrice/CarPrice";
import pang from '../../assets/pngcar.png'

interface ICardProps {
    name?: string;
    type: string;
    mileage: string;
    transmission: string;
    space: string;
    price: string;
    url: string;
  }

const ProductPdp = (props: ICardProps) => {
  const {
    name = "AKQA",
    type,
    mileage,
    transmission,
    space,
    price,
    url
  } = props
  return (
    <div className={styles.product}>
      <CName name={name} type={type}/>
      <div className={styles.gaadi}>
        <img src={url} alt="car" className={styles.car} />
      </div>
      <CarSpecs mileage={mileage} transmission={transmission} space={space}/>
      <CarPrice price={price}/>
    </div>
  );
};

export default ProductPdp;