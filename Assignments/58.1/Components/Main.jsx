import React, { useState } from "react";
import Product from "./Product";
import Data from "./Data";
import Button from "./Button";
import Sorting from "./Sorting";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
const Main = () => {
  const location = useLocation()
  const [filterData, setFilterData] = useState(Data);


  function handleFilter(event) {
    const searchItem = event.target.value;
    const filteredData = Data.filter(function (item) {
      return item.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    setFilterData(filteredData);
  }
  function SortData(event) {
    const criteria = event.target.value;
    if (criteria === "Default Sort") {
      setFilterData(Data);
      return;
    }
    let sorted = [...filterData];
    if (criteria === "Sort by title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "Sort by Price:low to high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (criteria === "Sort by Price:high to low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilterData(sorted);
  }

  return (
    <div className="bg-gray-100 p-10">
      <div className="bg-white shadow-md w-[80vw] mx-auto p-10 flex flex-col gap-6">
        <div className="flex sm:justify-between flex-col sm:flex-row gap-6 w-full">
          <Search search={handleFilter} />
          <Sorting SortData={SortData} />
        </div>
        <div className="flex flex-wrap justify-between ">
          {filterData.map((product, index) => (
            <Product
              key={index}
              {...product}
            />
          ))}
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Main;
