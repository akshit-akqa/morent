import React from "react";
import Bottom from "./Bottom/Bottom";
import styles from "./Footer1440375.module.scss";
import FooterSub from "./FooterSub/FooterSub";
import FooterTop from "./FooterTop/FooterTop";
function Footer1440375() {
  return (
    <div className={styles.footer}>
      <div className={styles.internalFooter}>
        <FooterTop/>
        <div className={styles.footerSubWrap}>
          <FooterSub />
          <FooterSub />
          <FooterSub />
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Footer1440375;
