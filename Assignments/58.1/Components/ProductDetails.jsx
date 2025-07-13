import React, { useState } from 'react'

const ProductsDetails = () => {
  const [count,setCount] = useState(0)
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white w-[80vw]  flex  p-5 flex-col sm:flex-row gap-5 sm:h-[60vh]">
        <div className="">
          <img
            className="h-full"
            src="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <div className="sm:w-[80%] flex flex-col gap-1 md:gap-3">
          <h1 className="text-gray-700 font-medium text-2xl md:text-3xl">
            Black Plain T Shirt
          </h1>
          <p className="font-bold text-lg md:text-2xl">$15.00</p>
          <p className="text-gray-700 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            inventore nostrum fuga, cupiditate quae, repellat possimus, magni
            iste impedit sequi exercitationem distinctio facere accusantium.
          </p>
          <div className="flex gap-3">
            <p className="border-gray-300 border-2 px-3 py-2">{count}</p>
            <button onClick={ () =>
                setCount(count+1)
            } className="border-2 bg-red-500 text-white px-7 rounded-lg md:px-10">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
