import React, { useState } from "react";

export const Table = () => {
  const [num, setNum] = useState(2);
  return (
    <>
      <div className="p-3 flex flex-col gap-2">
        <button className="text-white px-3 py-2 bg-blue-800 rounded-lg" onClick={() => setNum(num + 1)}>Next</button>
        <div className="flex flex-col gap-2">
          <p className="text-blue-600 text-2xl">
            {num} x 1 = {num * 1}{" "}
          </p>
          <p className="text-blue-600 text-2xl">
            {num} x 2 = {num * 2}
          </p>
          <p className="text-blue-600 text-2xl">
            {num} x 3 = {num * 3}
          </p>
          <p className="text-blue-600 text-2xl"> 
            {num} x 4 = {num * 4}
          </p>
        </div>
      </div>
    </>
  );
};
