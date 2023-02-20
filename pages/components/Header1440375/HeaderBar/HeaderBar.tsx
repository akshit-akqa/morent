import React from "react";
import styles from "./HeaderBar.module.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
function HeaderBar() {
  return (
    <>
    {/* Mobile SearchBar 375px */}
      <div className={styles.headerBar}>
        <div className={styles.left}>
          <MagnifyingGlassIcon className={styles.search} />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search something here"
          ></input>
        </div>
        <AdjustmentsHorizontalIcon className={styles.filter} />
      </div>

      {/* Desktop SearchBar 1440px*/}
      {/* <div className={styles.DheaderBar}>
        <div className={styles.left}>
          <MagnifyingGlassIcon className={styles.Dsearch} />
          <input
            className={styles.DsearchBar}
            type="text"
            placeholder="Search something here"
          ></input>
        </div>
        <AdjustmentsHorizontalIcon className={styles.Dfilter} />
      </div> */}
    </>
  );
}

export default HeaderBar;
