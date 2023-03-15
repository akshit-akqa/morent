import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import Card1440375 from "./components/Card1440375/Card1440375";
import Card2 from "./components/Card2/Card2";
const contentful = require("contentful");
const filter = () => {
  const [cardata, setCarData] = useState([]);
  //   useEffect(() => {
  const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "curk6g4u6s3f",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Pm-bYszT35Il_kAgIm4jTJw495mEdgoc9SrO1i-6FlM",
  });
  // const cars: any = [];
  client.getEntries({ content_type: "plp" }).then((response: any) => {
    const cars = response.items.map((item: any) => item.fields);
    // console.log(cars);
    setCarData(cars);
    // console.log("Akshit",cardata);
  });
  //   }, []);
  //setTimeOut clearInterval
  const [selectedCategory, setSelectedCategory] = useState();
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      // console.log(cardata)
      return cardata;
    }
    return cardata.filter((car: any) => car.type === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, cardata]);
  //   var filteredList = getFilteredList();
  function handleCategoryChange(event: any) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Filter Page</title>
      </Head>
      <div>
        <div className="filter-container">
          <div>Filter by Category:</div>
          <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Sport">Sport</option>
              <option value="SUV">SUV</option>
              <option value="SUV">Sedan</option>
            </select>
          </div>
        </div>
        <div>
          {filteredList.map((element: any, index) => (
            <Card2 {...element} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default filter;
