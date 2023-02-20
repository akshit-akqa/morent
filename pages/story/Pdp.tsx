import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Header1440375 from "../components/Header1440375/Header1440375";
import PDPWrapper1 from "../components/PDPWrapper1/PDPWrapper1";
import HeaderWrapper from "../Header/HeaderWrapper/HeaderWrapper";
import Footer1440375 from "../components/Footer1440375/Footer1440375";
import styles from './Pdp.module.scss'
import dynamic from "next/dynamic";
function Pdp() {
  const onlyWidth = useWindowWidth();
  return (
    <div>
      {onlyWidth > 767 ? <HeaderWrapper /> : <Header1440375 />}
      <PDPWrapper1 />
      <Footer1440375 />
    </div>
  );
}
export default dynamic(() => Promise.resolve(Pdp),{ssr : false })