import { Link } from "react-router-dom";
const Product = ({ id, thumbnail, category, title, price, sale }) => {
  return (
    <div className="relative w-full sm:w-[46%] md:w-[30%] shadow-md p-1 m-2">
      {sale && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] sm:text-xs w-8 h-8 flex items-center justify-center rounded-full z-10">
          SALE
        </span>
      )}
      <div className="h-[250px]  ">
        <img
          className=" h-full w-full object-cover "
          src={thumbnail}
          alt="Product"
        />
      </div>
      <p className="text-gray-600 text-md">{category}</p>
      <h3 className="font-medium">{title}</h3>
      <div className="text-yellow-500">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <p className="text-gray-600">${price}.00</p>
      <Link to={"/product/" + id}>View Details</Link>
    </div>
  );
};

export default Product;
