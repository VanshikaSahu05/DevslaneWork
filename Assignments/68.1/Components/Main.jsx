import { useEffect, useState } from "react";
import Product from "./Product";
import Button from "./Button";
import Sorting from "./Sorting";
import Search from "./Search";
import axios from "axios";
import "../Loader/loader.css";
import Loading from "./Loading";
const Main = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  function getData() {
    return axios.get("https://dummyjson.com/products");
  }
  useEffect(() => {
    const promise = getData();
    promise.then((response) => {
      setAllData(response.data.products);
      setFilterData(response.data.products);
    });
  }, []);
  function handleFilter(event) {
    const searchItem = event.target.value;
    const filteredData = allData.filter(function (item) {
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
  if (allData.length === 0) {
    return (
      <Loading/>
    );
  }
  return (
    <div className="bg-gray-100 py-10">
      <div className="bg-white shadow-md  mx-auto p-10 flex flex-col gap-6 w-[80vw]">
        <div className="flex sm:justify-between flex-col sm:flex-row gap-6 w-full">
          <Search search={handleFilter} />
          <Sorting SortData={SortData} />
        </div>
        <div className="flex flex-wrap justify-between ">
          {filterData.map((product) => (
            <Product key={product.id} {...product} />
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
