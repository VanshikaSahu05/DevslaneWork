import { Items } from "./Items";
import data from './Data'
export const Main = () => {
  return (
    <main className="bg-purple-100 py-10">
      <div className=" bg-white w-[90vw]  mx-auto px-14 py-16">
        <div className="text-right">
          <select
            className=" bg-gray-200 px-5 py-1 outline-0"
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
        <div className="my-8 flex flex-wrap gap-4 justify-center">
          {
            data.map((product) => (
              <div className="w-[30%] relative">
                <Items img={product.img} item={product.category} detail={product.title} price={product.price} sale={product.sale} />
              </div> 
            ))
          }
        </div>
        <div className="flex gap-2">
          <p className="border-red-600 border-2 px-3 py-2 bg-red-600 text-white">
            1
          </p>
          <p className="border-red-600 border-2 text-red-600 px-3 py-2">2</p>
          <p className="border-red-600 border-2 text-red-600 px-3 py-2">→</p>
        </div>
      </div>
    </main>
  );
};
