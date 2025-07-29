import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NotFound from "./NotFound";
import Loading from "./Loading";

const ProductsDetails = ({ onAddCart }) => {
  const { id } = useParams();
  const Id = +id;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  const getProductData = (id) =>
    axios.get(`https://dummyjson.com/products/${id}`);

  useEffect(() => {
    setLoading(true);
    getProductData(Id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [Id]);
  function addCart() {
    onAddCart(Id, count);
  }
  if (loading) {
    return (
      <Loading/>
    );
  }

  if (!product) return <NotFound />;

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-6 px-4">
      <div className="self-start mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <FaArrowLeft className="text-lg sm:text-xl" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <div className="bg-white w-full sm:w-[90%] lg:w-[80%] p-4 sm:p-6 rounded-md flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0 w-full sm:w-[40%] flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-48 sm:h-60 md:h-72 w-full max-w-sm"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            {product.title}
          </h1>
          <p className="text-lg font-bold text-red-500">${product.price}</p>
          <p className="text-gray-600 text-sm">{product.description}</p>

          <div className="flex flex-col gap-2 mt-4 sm:w-2/3">
            <input
              onChange={(event) => {
                setCount(+event.target.value);
              }}
              type="number"
              min="0"
              value={count}
              placeholder="Quantity"
              className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={addCart}
              
              className="bg-red-500  text-white font-medium text-sm sm:text-base py-2 rounded-md transition-transform duration-2 
                   active:scale-95"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full sm:w-[90%] lg:w-[80%] mt-6 px-1 sm:px-0">
        {Id > 1 ? (
          <Link
            to={`/product/${Id - 1}`}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <FaArrowLeft className="text-lg" />
            <span className="font-medium">Previous</span>
          </Link>
        ) : (
          <span></span>
        )}

        <Link
          to={`/product/${Id + 1}`}
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <span className="font-medium">Next</span>
          <FaArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default ProductsDetails;
