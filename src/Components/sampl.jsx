import React, { useContext } from 'react'
import {Link} from "react-router-dom";

import { contextProduct } from './Main';

const ProductContext = () => {
    const Product = useContext(contextProduct);
  return (
    <>
      <div className="main">
        <div className="cards" >

          {
          Product.map((elem)=>{

            const {id , texture ,img ,otherImgs,price}= elem;

          return (
             <Link style={{textDecoration:"none",color:"white"}} to={`/Product/${id}`} >
            <div className="card1" key={id}>
              <div className="card-img">
                   <img src={img} alt="" />
              </div>
              <div className="card-details">
                 <p>{texture}</p>
                 <p>{"₹"+" "+price+" "+"only/-"}</p>
              </div>
            </div>
            </Link>
          )
         
            
       })} 
         
        </div>
    </div>
    </>
  )
}

export default ProductContext





import React,{createContext } from 'react'
import './Main.css'
import menu from '../menu';
import ProductContext from './ProductContext';

export const contextProduct  = createContext();

function Main() {

  return (
    <>
    <contextProduct.Provider value={menu}>
         <ProductContext/>
    </contextProduct.Provider>
    </>
  )
}

export default Main