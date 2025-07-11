import React from "react";

const Sorting = () => {
  return (
    <div className="md:text-right h-full">
      <select
        className="border-1 border-gray-400 bg-gray-100 px-5 py-1 outline-0 w-full"
        name=""
        id="dropDown"
      >
        <option value="Default Sort">
          Default Sort
        </option>
        <option value="SortByClothes">Sort by tittle</option>
        <option value="Sort by Price:low to high">
          Sort by Price:low to high
        </option>
        <option value="Sort by Price:high to low">
          Sort by Price:high to low
        </option>
      </select>
    </div>
  );
};

export default Sorting;
