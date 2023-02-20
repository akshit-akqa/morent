import React from "react";
import Caraousel1440375 from "../Caraousel1440375/Caraousel1440375";
import Description1440375 from "../Description1440375/Description1440375";
import Sidebar1440375 from "../Sidebar1440375/Sidebar1440375";
import styles from "./PDPWrapper1.module.scss";
import Popular1440375 from "../Popular1440375/Popular1440375";
import Recommend1440375 from "../Recommend1440375/Recommend1440375";
import Reviews1440375 from "../Reviews1440375/Reviews1440375";
import Wrap from "../Wrap/Wrap";
function PDPWrapper1() {
  return (
    <div className={styles.main}>
      <Sidebar1440375 />
      <div className={styles.test3}>
      <div className={styles.test1}>
        <Caraousel1440375 />
        <Description1440375 />
      </div>
      <div className={styles.test2}>
        <Reviews1440375 />
        <Popular1440375 />
        <Wrap />
        <Recommend1440375 />
        <Wrap />
      </div>
      </div>
    </div>
  );
}

export default PDPWrapper1;
