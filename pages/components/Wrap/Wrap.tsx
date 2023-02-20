import React, { useEffect, useState } from 'react'
import styles from './Wrap.module.scss'
import Card1440375 from '../Card1440375/Card1440375'
const contentful = require("contentful");
// interface ICard1440375Props {
//   name?: string;
//   type: string;
//   mileage: string;
//   transmission: string;
//   space: string;
//   price: string;
// }
function Wrap() {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "curk6g4u6s3f",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "Pm-bYszT35Il_kAgIm4jTJw495mEdgoc9SrO1i-6FlM"
    });
    const cars:any = []
    client.getEntries({content_type:'plp'}).then((response: any) =>  {
      // console.log(response.items[0].fields)
      // for (let i = 0; i < response.items.length; i++) {
      //     cars[i] = response.items[i].fields;
      // }
      
      const cars = response.items.map((item: any) => item.fields)
      // console.log(cars)
      setData(cars)
      // console.log(data)
    })
  }, [])
  
  // const client = contentful.createClient({
  //   // This is the space ID. A space is like a project folder in Contentful terms
  //   space: "curk6g4u6s3f",
  //   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  //   accessToken: "Pm-bYszT35Il_kAgIm4jTJw495mEdgoc9SrO1i-6FlM"
  // });
  // const cars:any = []
  // client.getEntries({content_type:'plp'}).then((response: any) =>  {
  //   // console.log(response.items[0].fields)
  //   // for (let i = 0; i < response.items.length; i++) {
  //   //     cars[i] = response.items[i].fields;
  //   // }
    
  //   const cars = response.items.map((item: any) => item.fields)
  //   console.log(cars)
  //   setData(cars)
  //   console.log(data)
  // })
  const renderCarsData = () => (
    data.map((item: any) => (
      <Card1440375 name={item.name} type={item.type} mileage={item.mileage} transmission={item.transmission} space={item.space} price={item.price} url={item.carImage.fields.file.url} />
    ))
  )

  return (
    <div className={styles.wrap}>
       {renderCarsData()}
    </div>
  )
}

export default Wrap