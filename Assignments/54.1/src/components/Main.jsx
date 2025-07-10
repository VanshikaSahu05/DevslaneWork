import React from "react";
import Product from "./Product";
import Data from "./Data";
import Button from "./Button";
const Main = () => {
  return (
    <div className="bg-gray-100 p-10"><div className="bg-white shadow-md w-[80vw] mx-auto p-10 flex flex-col gap-6">
      <div className="text-right">
        <select
          className="border-1 bg-gray-50 px-5 py-1 outline-0"
          name=""
          id="dropDown"
        >
          <option className="hidden" value="Default Sort">
            Default Sort
          </option>
          <option value="SortByClothes">SortByClothes</option>
          <option value="SortByCups">SortByCups</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-between ">
        {Data.map((product) => (
          <Product
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
            sale={product.sale}
          />
        ))}
      </div>
      <div>
        <Button />
      </div>
      </div></div>
  );
};

export default Main;
