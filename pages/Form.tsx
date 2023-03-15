import React from "react";
import Form1440375 from "./components/Form1440375/Form1440375";
import styles from "../styles/Form.module.scss";
import { useWindowWidth } from "@react-hook/window-size";
import Footer1440375 from "./components/Footer1440375/Footer1440375";
import dynamic from "next/dynamic";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import RentalSummary from "./components/RentalSummary/RentalSummary";
import Head from "next/head";
function Form() {
  const onlyWidth = useWindowWidth();
  return (
    <>
      <Head>
        <title>Order Form</title>
      </Head>
      <div>
        {onlyWidth > 767 ? <HeaderComp /> : <HeaderMobile />}
        <div className={styles.main}>
          <Form1440375 />
          <RentalSummary />
        </div>
        <Footer1440375 />
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(Form), { ssr: false });