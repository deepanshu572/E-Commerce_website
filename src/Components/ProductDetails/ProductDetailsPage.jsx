import React,{ useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import './ProductDetailsPage.css'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { useProductContext } from '../Context/ProductContext';

function ProductDetailsPage() {
  const { addToCart} = useCartContext();
  const { menu } = useProductContext();


  const [quantity, setQuantity] = useState(1);
     const {id} = useParams()
     const item = menu.filter((menu) => menu.id === parseInt(id));
     const increase = ()=> {
        if(quantity >= 1){
          setQuantity(quantity + 1)
        }
     }
     const decrease =()=>{
      if(quantity > 1){
        setQuantity(quantity -1)
      }
     }
     const calcPrice =(quantity)=>{
      // console.log();
      return  quantity
    
     }
    


  return (
    <>
   
   {item.map((element)=>{
      const { description, price ,img ,otherImgs, specs ,texture,weight,size}= element;
      let image = {img , otherImgs};
      console.log(image);
      // console.log(element)
  return <div className="product-main-box" key={id}>
       <h2>{description}</h2>

     <div className="product-details">
      <div className="left-product">
        <div className="left-big">
             <img src={img} alt="" />
        </div>
        <div className="left-small">
         <img   src={img} alt="" />
          <img  src={otherImgs[0]} alt="" />
          <img  src={otherImgs[1]} alt="" />
        </div>
      </div>
      <div className="right-product">
         <b>Details</b>
         <p>{specs}</p>
         <span>
          <div className="button-qty">
           <b>Quantity</b>
           <button className='btn1' onClick={decrease} >-</button>
           <button disabled className='quantity' onClick={calcPrice}>{quantity}</button>
           <button className='btn3' onClick={increase} >+</button>
          </div>
        
            <p className='payment' >₹{price * quantity}only /-</p>
         </span>
         <div className="buy-btn">
         <NavLink to="/cart"
        onClick={ () =>addToCart( id ,quantity , item , texture  )} 
        >
            <button className='Cart' >Add To Cart</button>
        </NavLink>   

         <button>Buy Now</button>
         </div>
        
      </div>
     </div>
     <div className="more-details">
      <div className="textute">
         <b>textute</b>
         <p>{texture}</p>
      </div>
      <div className="Weight">
          <b>Weight</b>
          <p>{weight}</p>
      </div>
      <div className="size">
           <b>size</b>
           <p>{size}</p>
      </div>
     </div>
    </div>
   })} 
   
          
        
    </>
  )
}

export default ProductDetailsPage