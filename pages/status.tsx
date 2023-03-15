import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWindowWidth } from "@react-hook/window-size";
import Footer1440375 from "./components/Footer1440375/Footer1440375";

function status() {
  const onlyWidth = useWindowWidth();
  const [data, setData]: any = useState({});
  const [cardData, setCardData]: any = useState({});
  let d: any = {};
  let card: any = {};
  useEffect(() => {
    var item_value: any = sessionStorage.getItem("values");
    d = item_value;
    setData(JSON.parse(d));

    ///////////////////

    // var item: any = sessionStorage.getItem("token");
    // card = item
    // setCardData(JSON.parse(card))
  }, []);
//   console.log(cardData);
  return (
    <div>
      Order placed successfully for {data.name}
      <div style={{ height: 500 }}>
        <table style={{ border: "1px solid" }}>
            <thead>
          <tr>
          <th style={{ border: "1px solid" }}>Order ID</th>
            <th style={{ border: "1px solid" }}>Name</th>
            <th style={{ border: "1px solid" }}>Address</th>
            <th style={{ border: "1px solid" }}>Town/City</th>
          </tr>
          </thead>
          <tbody>
          <tr style={{ border: "1px solid" }}>
          <td style={{ border: "1px solid" }}>{data.id}</td>
            <td style={{ border: "1px solid" }}>{data.name}</td>
            <td style={{ border: "1px solid" }}>{data.address}</td>
            <td style={{ border: "1px solid" }}>{data.Town}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <Footer1440375 />
    </div>
  );
}
export default dynamic(() => Promise.resolve(status), { ssr: false });
