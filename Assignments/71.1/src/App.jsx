import './App.css'
import SignUp from './Pages/SignUp'
import ForgetPassword from './Pages/ForgetPassword'
import { Routes, Route, useLocation } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import ProductList from './Components/ProductList'
import ProductsDetails from './Components/ProductDetails'
import Header from './Components/Header'
import NotFound from './Components/NotFound'
import CartPage from './Components/CartList'
import { useState } from 'react'

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/LoginPage', '/SignUp', '/ForgetPassword'];

  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  const savedDataObject = localStorage.getItem("myCart") || "{}";
  const SavedData = JSON.parse(savedDataObject);
  const [cart, setCart] = useState(SavedData || {});

  function handleCart(ProductId, count) {
    const oldCount = cart[ProductId] || 0;
    const newCart = { ...cart, [ProductId]: oldCount + count };
    setCart(newCart);
    localStorage.setItem("myCart", JSON.stringify(newCart));
  }

  const total = Object.keys(cart).reduce((prev, current) => {
    return prev + cart[current];
  }, 0);

  function updateCart(newcart) {
    setCart(newcart);
    localStorage.setItem("myCart", JSON.stringify(newcart));
  }

  return (
    <>
      {!shouldHideHeader && <Header ProductCount={total} />}

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductsDetails onAddCart={handleCart} />} />
        <Route path="/cart" element={<CartPage updateCart={updateCart} cart={cart} />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
