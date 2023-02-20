import React, {useState} from "react";
import styles from "./Caraousel1440375.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";
function Caraousel1440375() {
  const onlyWidth = useWindowWidth();
  const imgs=[
    {id:0,value:"https://svgur.com/i/qKa.svg"},
    {id:1,value:"https://cdn.carbuzz.com/gallery-images/2021-nissan-gt-r-nismo-front-seats-carbuzz-604076-1600.jpg"},
    {id:2,value:"https://imageio.forbes.com/blogs-images/peterlyon/files/2018/07/Screenshot-2018-07-06-19.08.24.jpg?format=jpg&width=960"},
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{ 
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className={styles.main}>
      <img src={wordData.value} height="300" width="500" className={styles.img} /> 
      <div className={styles.flex_row}>
        {imgs.map((data,i)=>
        <div className={styles.thumbnail} key={i} >
          {
          wordData.id==i?
          <img className={styles.clicked} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />:
          <img className={styles.notclick}src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
}
        </div>
        )}
      </div>
    </div>
  );
  // return (
  //   <Carousel
  //     showArrows={false}
  //     showStatus={false}
  //     showIndicators={false}
  //     thumbWidth={onlyWidth > 767 ? 148 : 96}
  //     dynamicHeight={false}
  //     className={styles.car}
  //   >
  //     <div className={styles.banner}>
  //       <img
  //         src={
  //           onlyWidth > 767
  //             ? "https://images2.imgbox.com/68/67/av7D6aH9_o.png"
  //             : "https://images2.imgbox.com/f2/89/qaqo4z2C_o.png"
  //         }
  //         alt="3"
  //         className={styles.banner}
  //       ></img>
  //     </div>
  //     <div className={styles.banner}>
  //       <img
  //         src="https://cdn.carbuzz.com/gallery-images/2021-nissan-gt-r-nismo-front-seats-carbuzz-604076-1600.jpg"
  //         alt="1"
  //       ></img>
  //     </div>
  //     <div className={styles.banner}>
  //       <img
  //         src="https://imageio.forbes.com/blogs-images/peterlyon/files/2018/07/Screenshot-2018-07-06-19.08.24.jpg?format=jpg&width=960"
  //         alt="2"
  //       ></img>
  //     </div>
  //   </Carousel>
  // );
  //   https://images2.imgbox.com/71/29/X0gvI9Fq_o.jpeg mobile
  // https://images2.imgbox.com/13/0d/o3zU5FkS_o.png desktop
}

export default Caraousel1440375;
