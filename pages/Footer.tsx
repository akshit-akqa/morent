import React from "react";
import styles from "../styles/Footer.module.scss";
function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.footerLeft}>
          <p className={styles.logo}>MORENT</p>
          <span className={styles.tagLine}>
            Our vision is to provide convenience and help increase your sales
            business.
          </span>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.RightSections}>
            <p className={styles.RightHeading}>About</p>
            <div className={styles.RightLinkSection}>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  How it works
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Featured
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Partnership
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Business Relation
                </a>
              </span>
            </div>
          </div>
          <div className={styles.RightSections}>
            <p className={styles.RightHeading}>Community</p>
            <div className={styles.RightLinkSection}>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Events
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Blog
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Podcast
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Invite a friend
                </a>
              </span>
            </div>
          </div>
          <div className={styles.RightSections}>
            <p className={styles.RightHeading}>Socials</p>
            <div className={styles.RightLinkSection}>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Discord
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Instagram
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Twitter
                </a>
              </span>
              <span className={styles.Links}>
                <a href="#" className={styles.link}>
                  Facebook
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomLeft}>
          <p className={styles.bottomLinks}>&#xA9;2022 MORENT. All rights reserved</p>
        </div>
        <div className={styles.bottomRight}>
            <span className={styles.bottomLinks}>Privacy & Policy</span>
            <span className={styles.bottomLinks}>Terms & Condition</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
