import './App.css'

import { Routes ,Route } from 'react-router-dom'

import ProductList from './Components/ProductList'
import ProductsDetails from './Components/ProductDetails'
import Header from './Components/Header'
import NotFound from './Components/NotFound'
import CartPage from './Components/CartList'
import { useState } from 'react'



function App() {
  const savedDataObject = localStorage.getItem("myCart") || "{}"
  const SavedData = JSON.parse(savedDataObject)
  const [cart,setCart] = useState(SavedData || {})

  function handleCart(ProductId,count){
    const oldCount = cart[ProductId] || 0
    const newCart = {...cart,[ProductId]:oldCount+count}
    setCart(newCart)
    localStorage.setItem("myCart",JSON.stringify(newCart))

  }
  const total = Object.keys(cart).reduce(function (prev,current){
    return prev+cart[current]
  },0)
  function updateCart(newcart){
    setCart(newcart)
    localStorage.setItem("myCart",JSON.stringify(newcart))
  }
  
  return (
    <>
      <Header ProductCount={total} />
      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductsDetails onAddCart={handleCart} />}
    />
    <Route path='*' element={<NotFound />}/>
    <Route path='/cart' element={<CartPage  updateCart={updateCart} cart={cart}/>}/>
    </Routes>
    {/* <Error /> */}
    </>
  )
}

export default App
