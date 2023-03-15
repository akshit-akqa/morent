import Head from "next/head";
import { useWindowWidth } from "@react-hook/window-size";
import "../styles/index.module.scss";
import dynamic from "next/dynamic";
import Plp from "./components/Plp/Plp";

function Home() {
  const onlyWidth = useWindowWidth();
  return (
    <>
      <Head>
        <title>PLP</title>
      </Head>
      <Plp />
    </>
  );
}
export default dynamic(() => Promise.resolve(Home), { ssr: false });