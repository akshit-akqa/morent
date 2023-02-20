import React from "react";
import Form1440375 from "./components/Form1440375/Form1440375";
import Payment1440375 from "./components/Payment1440375/Payment1440375";
import styles from "../styles/Form.module.scss";
import HeaderWrapper from "./Header/HeaderWrapper/HeaderWrapper";
import Header1440375 from "./components/Header1440375/Header1440375";
import { useWindowWidth } from "@react-hook/window-size";
import Footer1440375 from "./components/Footer1440375/Footer1440375";
import dynamic from "next/dynamic";
function Form() {
  const onlyWidth = useWindowWidth();
  return (
    <div>
      {onlyWidth > 767 ? <HeaderWrapper /> : <Header1440375 />}
      <div className={styles.main}>
        <Form1440375 />
        <Payment1440375 />
      </div>
      <Footer1440375 />
    </div>
  );
}
export default dynamic(()=>Promise.resolve(Form), {ssr:false})