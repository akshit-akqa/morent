import Image from 'next/image'
import React from 'react'
import styles from './Card1440375.module.scss'
import Name from './Name/Name'
import car from '../../assets/Car2.svg'
import Specs from './Specs/Specs'
import Button from './Button/Button'
import Price from './Price/Price'
import plp from '../../assets/plp/koenigsegg.svg'

interface ICard1440375Props {
  name?: string;
  type: string;
  mileage: string;
  transmission: string;
  space: string;
  price: string;
  carImage: any;
}

const Card2 = (props: ICard1440375Props) => {
  const {
    name = "AKQA",
    type,
    mileage,
    transmission,
    space,
    price,
    carImage
  } = props
  return (
    <div className={styles.card}>
         <Name name={name} type={type}/>
         {/* <Image src={plp} className={styles.car} alt="d"/> */}
         {/* <img src="//images.ctfassets.net/curk6g4u6s3f/68ftsvkbejYn1EhtCh3fMU/18727e4f068983a175eb1d919945d18f/koenigsegg.svg" className={styles.car} alt="d"/> */}
         <Image src={carImage.fields?.file.url} width={100} height={100} className={styles.car} alt="img"/>
         
         <Specs mileage={mileage} transmission={transmission} space={space}/>
         <Price price={price}/>
    </div>
  )
}

export default Card2