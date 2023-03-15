import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import PDPWrapper from "../components/PDPWrapper/PDPWrapper";
import Footer1440375 from "../components/Footer1440375/Footer1440375";
import styles from "./Pdp.module.scss";
import dynamic from "next/dynamic";
import HeaderComp from "../components/HeaderComp/HeaderComp";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import Head from "next/head";
function Pdp() {
  const onlyWidth = useWindowWidth();
  return (
    <>
      <Head>
        <title>PDP</title>
      </Head>
      <div>
        {onlyWidth > 767 ? <HeaderComp /> : <HeaderMobile />}
        <PDPWrapper />
        <Footer1440375 />
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(Pdp), { ssr: false });
