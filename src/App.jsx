import React from 'react'
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";

import './App.css'
import ProductDetailsPage from './Components/ProductDetails/ProductDetailsPage';
import ProductPage from './Components/ProductPage/ProductPage';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Homes/Home';
// import TrendingProduct from './Components/TrendingProduct/TrendingProduct';
import Cart from './Components/cart/Cart';



export default function App() {
  return ( 
      <Router>

    <div>
      <NavBar/>
        <Routes> 
             <Route index element={<Home/>}></Route>
            <Route exact path="Product/:id" element={<ProductDetailsPage/>}></Route>
            <Route  exact path="ProductPage" element={<ProductPage/>}></Route>
            <Route  exact path="Cart" element={<Cart/>}></Route>
      </Routes>
         {/* <TrendingProduct/> */}

   
    </div> 
      </Router>

  )
}
