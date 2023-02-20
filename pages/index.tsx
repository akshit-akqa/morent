import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWindowWidth } from "@react-hook/window-size";
import HeaderWrapper from './Header/HeaderWrapper/HeaderWrapper';
import Header1440375 from './components/Header1440375/Header1440375';
import BannerWrapper from './components/BannerWrapper/BannerWrapper';
import Filter1440375 from './components/Filter1440375/Filter1440375';
import Popular1440375 from './components/Popular1440375/Popular1440375';
import Wrap from './components/Wrap/Wrap';
import Recommend1440375 from './components/Recommend1440375/Recommend1440375';
import Footer1440375 from './components/Footer1440375/Footer1440375';
// import './../styles/globals.css'
import './index.module.scss'
import dynamic from 'next/dynamic';

function Home() {
  const onlyWidth = useWindowWidth()
  return (
    <div className={styles.container}>
      {onlyWidth > 767 ? <HeaderWrapper /> : <Header1440375 />}
       <BannerWrapper/>    
       <Filter1440375/>
       <Popular1440375/>
       <Wrap/>
       <Recommend1440375/>
       <Wrap/>
       <Footer1440375/>
    </div>
  )
}
export default dynamic(() => Promise.resolve(Home),{ssr : false })
