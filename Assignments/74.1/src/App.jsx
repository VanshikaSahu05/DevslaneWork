import "./App.css";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ProductList from "./Components/ProductList";
import ProductsDetails from "./Components/ProductDetails";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import CartPage from "./Components/CartList";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import AuthUser from "./Components/AuthUser";
import LoginUser from "./Components/LoginUser";
import { createContext } from "react";

export const UserContext=createContext()

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/LoginPage", "/SignUp", "/ForgetPassword"];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  const savedDataObject = localStorage.getItem("myCart") || "{}";
  const SavedData = JSON.parse(savedDataObject);
  const [cart, setCart] = useState(SavedData || {});

  const token = localStorage.getItem("token");
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setUserLoading(false);
        }).catch(()=>{
          localStorage.removeItem("token")
          setUserLoading(false)
        });
    } else {
      setUserLoading(false);
    }
  }, []);
  function handleCart(ProductId, count) {
    const oldCount = cart[ProductId] || 0;
    const newCart = { ...cart, [ProductId]: oldCount + count };
    setCart(newCart);
    localStorage.setItem("myCart", JSON.stringify(newCart));
  }

  const total = Object.keys(cart).reduce((prev, current) => {
    return prev + cart[current];
  }, 0);

  function updateCart(newCart) {
    setCart(newCart);
    localStorage.setItem("myCart", JSON.stringify(newCart));
  }
  if (userLoading) {
    return <Loading />;
  }
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      {!shouldHideHeader && <Header ProductCount={total}  />}

      <Routes>
        <Route
          path="/"
          element={
            <LoginUser >
              <ProductList />
            </LoginUser>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductsDetails onAddCart={handleCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage updateCart={updateCart} cart={cart} />}
        />
        <Route
          path="/LoginPage"
          element={
            <AuthUser >
              <LoginPage setUser={setUser}  />
            </AuthUser>
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
