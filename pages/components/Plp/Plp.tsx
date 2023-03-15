import React from "react";
import HeaderComp from "../HeaderComp/HeaderComp";
import Product from "../Product/Product";
import styles from "./Plp.module.scss";
import Hero from "../Hero/Hero";
import Popular1440375 from "../Popular1440375/Popular1440375";
import { useWindowWidth } from "@react-hook/window-size";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import dynamic from "next/dynamic";
import DropdownForm from "../DropdownForm/DropdownForm";
import Switch from "../../assets/Switch.svg";
import Image from "next/image";
import Footer1440375 from "../Footer1440375/Footer1440375";
import ProductRecommend from "../ProductRecommend/ProductRecommend";
import Recommend1440375 from "../Recommend1440375/Recommend1440375";
import HeroWrap from "../HeroWrap/HeroWrap";
import ProductWrap from "../ProductWrap/ProductWrap";
const Plp = () => {
  const onlyWidth = useWindowWidth();
  return (
    <>
      {onlyWidth > 767 ? <HeaderComp /> : <HeaderMobile />}
      <HeroWrap/>
      <div className={styles.form}>
        <DropdownForm title="Pick-Up" />
        <Image src={Switch} alt="switch" className={styles.switch} />
        <DropdownForm title="Drop-Off" />
      </div>
      <Popular1440375 />
      <ProductWrap/>
      <Recommend1440375/>
      <div className={styles.rcdiv}>
        <ProductRecommend />
        <ProductRecommend />
        <ProductRecommend />
        <ProductRecommend />
      </div>
      <Footer1440375 />
    </>
  );
};

export default dynamic(() => Promise.resolve(Plp), { ssr: false });