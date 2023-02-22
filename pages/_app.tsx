import "../styles/globals.css";
import HeaderWrapper from "./Header/HeaderWrapper/HeaderWrapper";
import Header1440375 from "./components/Header1440375/Header1440375";
import { useWindowWidth } from "@react-hook/window-size";
import Filter1440375 from "./components/Filter1440375/Filter1440375";
import Wrap from "./components/Wrap/Wrap";
import Footer1440375 from "./components/Footer1440375/Footer1440375";
import Popular1440375 from "./components/Popular1440375/Popular1440375";
import Recommend1440375 from "./components/Recommend1440375/Recommend1440375";
import BannerWrapper from "./components/BannerWrapper/BannerWrapper";
import Caraousel1440375 from "./components/Caraousel1440375/Caraousel1440375";
import Description1440375 from "./components/Description1440375/Description1440375";
import Reviews1440375 from "./components/Reviews1440375/Reviews1440375";
import Sidebar1440375 from "./components/Sidebar1440375/Sidebar1440375";
import PDPWrapper1 from "./components/PDPWrapper1/PDPWrapper1";
import PDPWrapper2 from "./components/PDPWrapper2/PDPWrapper2";
import Payment1440375 from "./components/Payment1440375/Payment1440375";
import FormHeading from "./components/FormHeading/FormHeading";
// export default function App() {
//   const onlyWidth = useWindowWidth()
//   return (
//     <div className="app">
//       {/*Homepage*/}
//       {onlyWidth > 767 ? <HeaderWrapper /> : <Header1440375 />}
//       <BannerWrapper/>
      
//       <Filter1440375/>
//       <Popular1440375/>
//       <Wrap/>
//       <Recommend1440375/>
//       <Wrap/>
//       <Footer1440375/>

//       {/*PDP*/}
//       {/*Sidebar,Carousel and Description Wrapper is called PDPWrapper1*/}
//       {onlyWidth > 767 ? <HeaderWrapper /> : <Header1440375 />}
//       <PDPWrapper1/>
//       <Footer1440375/>
//       {/*Payment Form Page */}
//       <Payment1440375/>
//       <FormHeading heading="Billing Info" action="Please enter your billing info" step={1}/>
//       <FormHeading heading="Rental Info" action="Please select your rental date" step={2}/>
//       <FormHeading heading="Payment Method" action="Please enter your payment method" step={3}/>
//       <FormHeading heading="Confirmation" action="We are getting to the end. Just few clicks and your rental is ready!" step={4}/>
//     </div>
//   );
// }

type AppProps = {
    Component:any;
    pageProps:any;
}


export default function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}