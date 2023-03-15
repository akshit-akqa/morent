import React from "react";
import Caraousel1440375 from "../Caraousel1440375/Caraousel1440375";
import Sidebar1440375 from "../Sidebar1440375/Sidebar1440375";
import styles from "./PDPWrapper.module.scss";
import Popular1440375 from "../Popular1440375/Popular1440375";
import Recommend1440375 from "../Recommend1440375/Recommend1440375";
import Reviews1440375 from "../Reviews1440375/Reviews1440375";
import Wrap from "../Wrap/Wrap";
import ProductWrap from "../ProductWrap/ProductWrap";
import ProductWrapPdp from "../ProductWrapPdp/ProductWrapPdp";
import CarDescription from "../CarDescription/CarDescription";
function PDPWrapper() {
  return (
    <div className={styles.main}>
      <Sidebar1440375 />
      <div className={styles.test3}>
      <div className={styles.test1}>
        <Caraousel1440375 />
        <CarDescription/>
      </div>
      <div className={styles.test2}>
        <Reviews1440375 />
        <Popular1440375 />
        {/* <Wrap /> */}
        <ProductWrapPdp/>
        <Recommend1440375 />
        {/* <Wrap /> */}
        <ProductWrapPdp/>
      </div>
      </div>
    </div>
  );
}

export default PDPWrapper;
