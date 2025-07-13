import './App.css'

import { Routes ,Route } from 'react-router-dom'

import ProductList from './Components/ProductList'
import ProductsDetails from './Components/ProductDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product" element={<ProductsDetails  />}
    />
    </Routes>
    </>
  )
}

export default App
