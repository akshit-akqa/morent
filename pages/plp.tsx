import React from "react";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import Product from "./components/Product/Product";
import styles from "../styles/plp.module.scss";
import Hero from "./components/Hero/Hero";
import Popular1440375 from "./components/Popular1440375/Popular1440375";
import { useWindowWidth } from "@react-hook/window-size";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import dynamic from "next/dynamic";
import DropdownForm from "./components/DropdownForm/DropdownForm";
import Switch from "./assets/Switch.svg";
import Image from "next/image";
import Footer1440375 from "./components/Footer1440375/Footer1440375";
import ProductRecommend from "./components/ProductRecommend/ProductRecommend";
import Recommend1440375 from "./components/Recommend1440375/Recommend1440375";
import HeroWrap from "./components/HeroWrap/HeroWrap";
import ProductWrap from "./components/ProductWrap/ProductWrap";
const plp = () => {
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

export default dynamic(() => Promise.resolve(plp), { ssr: false });