import React, { useState } from 'react'
import Banner1440375 from '../Banner1440375/Banner1440375'
import styles from './BannerWrapper.module.scss'
import carr from "../../assets/Car2.svg";
import car1 from "../../assets/image71.svg";
const contentful = require("contentful");
function BannerWrapper() {
    // var obj:object = {}
    const [bannerTitleA,setBannerTitleA] = useState('')
    const [bannerTitleB,setBannerTitleB] = useState('')
    const [bannerDescriptionA,setBannerDescriptionA] = useState('')
    const [bannerDescriptionB,setBannerDescriptionB] = useState('')
    const [linkA, setLinkA] = useState('')
    const [linkB, setLinkB] = useState('')
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "curk6g4u6s3f",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "Pm-bYszT35Il_kAgIm4jTJw495mEdgoc9SrO1i-6FlM"
    });
    // let items:Array
    client.getEntries({content_type:'banner'}).then((response:any) =>  {
      setBannerTitleB(response.items[0].fields.title)
      setBannerDescriptionB(response.items[0].fields.description)
      setBannerTitleA(response.items[1].fields.title)
      setBannerDescriptionA(response.items[1].fields.description)
      setLinkA(response.items[0].fields.image.fields.file.url)
      setLinkB(response.items[1].fields.image.fields.file.url)
      // console.log(response.items[1].fields.image.fields.file.url)
      })
  return (
    <div className={styles.wrap}>
      {/* {console.log(data)} */}
        {/* <Banner1440375 title="The Best Platform for Car Rental" body="Ease of doing a car rental safely and reliably. Of course at a low price." imageUrl={car}/>
        <Banner1440375 title="Easy way to rent a car at a low price" body="Providing cheap car rental services and safe and comfortable facilities." imageUrl={car} /> */}
        <Banner1440375 title={`${bannerTitleB}`} body={`${bannerDescriptionB}`} imageUrl={carr}/>
        <Banner1440375 title={`${bannerTitleA}`} body={`${bannerDescriptionA}`} imageUrl={car1}/>
    </div>
  )
}

export default BannerWrapper
// console.log(response.includes.Asset[1].fields)
// response.items[0].fields 2nd banner
// response.items[1].fields 1st banner