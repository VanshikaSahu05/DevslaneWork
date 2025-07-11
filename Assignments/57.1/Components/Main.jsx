import React from "react";
import Product from "./Product";
import Data from "./Data";
import Button from "./Button";
import Sorting from "./Sorting";
import Search from "./Search";
const Main = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="bg-white shadow-md w-[80vw] mx-auto p-10 flex flex-col gap-6">
        <div className="flex sm:justify-between flex-col sm:flex-row gap-6 w-full">
          <Search />
          <Sorting />
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
      </div>
    </div>
  );
};

export default Main;
