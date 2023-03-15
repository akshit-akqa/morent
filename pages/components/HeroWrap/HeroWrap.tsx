import React, { useState, useEffect } from "react";
import { isTemplateExpression } from "typescript";
import Hero from "../Hero/Hero";
import styles from "./HeroWrap.module.scss";
import carr from "../../assets/Car2.svg";
import car1 from "../../assets/image71.svg";
const contentful = require("contentful");
const HeroWrap = () => {
  //   const [data, setData] = useState<any>([]);
  const [titleA, setTitleA] = useState("");
  const [titleB, setTitleB] = useState("");
  const [bodyA, setBodyA] = useState("");
  const [bodyB, setBodyB] = useState("");
  const [linkA, setLinkA] = useState("");
  const [linkB, setLinkB] = useState("");
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "curk6g4u6s3f",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "Pm-bYszT35Il_kAgIm4jTJw495mEdgoc9SrO1i-6FlM",
    });
    client.getEntries({ content_type: "banner" }).then((response: any) => {
      setTitleB(response.items[0].fields.title);
      setBodyB(response.items[0].fields.description);
      setTitleA(response.items[1].fields.title);
      setBodyA(response.items[1].fields.description);
      setLinkA(response.items[0].fields.image.fields.file.url)
      setLinkB(response.items[1].fields.image.fields.file.url)
      console.log(response.items);
      //   setData(response.items);
    });
  }, []);
  // const renderData = ():any => {
  //     data.map((item:any) => (
  //         <Hero title={item.fields.title} body={item.fields.body} imageUrl={item.fields.image.fields.file.url} />
  //     ))
  // }
  return (
    <div className={styles.hero}>
      <Hero title={`${titleB}`} body={`${bodyB}`} imageUrl={car1} />
      <Hero title={`${titleA}`} body={`${bodyA}`} imageUrl={carr} />
    </div>
  );
};

export default HeroWrap;
