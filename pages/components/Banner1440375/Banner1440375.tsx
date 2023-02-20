import Image from "next/image";
import React from "react";
import styles from "./Banner1440375.module.scss";
import Button from "./Button/Button";
import Text from "./Text/Text";
import car2 from "../../assets/Car2.svg";
import car1 from "../../assets/Car1.svg";

interface BannerProps{
  title:string
  body:string
  imageUrl: string
  style?: React.CSSProperties;

}
function Banner1440375({title,body,imageUrl, style}:BannerProps) {
  return (
    
      <div className={styles.bannerMain1}>
        <Text title={title} body={body}/>
        <Button />
        <div className={styles.i}><Image src={imageUrl} className={styles.car} /></div>
        {/* <Img/> */}
      </div>
    
  );
}

export default Banner1440375;
