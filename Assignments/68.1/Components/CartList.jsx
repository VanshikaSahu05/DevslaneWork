import  { useEffect, useState } from "react";
import CartRow from "../Cart/CartRow";
import Heading from "../Cart/Heading";
import Button from "../Cart/Button";
import Loading from "./Loading";
import CartTotal from "../Cart/CartTotal";
import axios from "axios";
const CartList = ({ cart, updateCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleRemove(id) {
    const newCart = { ...cart };
    delete newCart[id];
    updateCart(newCart);
  }

  useEffect(() => {
    const Ids = Object.keys(cart || {});
    if (Ids.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }
    Promise.all(
      Ids.map((Id) => {
        return axios
          .get(`https://dummyjson.com/products/${Id}`)
          .then((response) => response.data);
      })
    )
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [cart]);
  if (loading) {
    return <Loading />;
  }
  if (products.length === 0) {
    return <p className="p-4">Cart is empty</p>;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto flex flex-col gap-3 items-end">
      <div className="w-full mt-10 border-2 border-gray-500 bg-white">
        <Heading />
        {products.map((product) => (
          <CartRow
            key={product.id}
            img={product.thumbnail}
            title={product.title}
            price={product.price}
            quantity={cart[product.id]}
            remove={() => handleRemove(product.id)}
          />
        ))}
        <Button />
      </div>
      <CartTotal />
    </div>
    </>
  );
};

export default CartList;
