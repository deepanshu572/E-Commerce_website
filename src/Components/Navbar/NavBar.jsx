import React  from 'react'
import {Link} from "react-router-dom";
import './NavBar.css'
import { useCartContext } from '../Context/CartContext'; 


function NavBar() {
  const {cart} = useCartContext();

  return (
    <>
        <div className="navbar">
              <div className="nav-img">
              <Link  aria-current="page" to="/"><img src="https://minimalist-e-commerce.vercel.app/static/media/newlogo2.913a6896d5b7d39d8bf6.png" alt="" /></Link>  
              </div>
              <div className="nav-name">
              <Link to="/ProductPage">CATEGORIES</Link>
              <Link to="/ProductDetailsPage">PRODUCTPAGE</Link>
              <Link to="Cart"><i className="fa-solid fa-cart-shopping"></i><span className='small'>{ cart.length }</span></Link>
                
              </div>
        </div>
      
    </>
  )
}

export default NavBar