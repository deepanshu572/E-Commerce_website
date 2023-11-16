import React , {useState}from 'react'
import './Cart.css'
import { RxCross2 } from "react-icons/rx";
import { useCartContext } from '../Context/CartContext';


const CartItem = ({cart , cart1}) => { 
  const {removeItem} = useCartContext(); 

  const {
    quantity
  }= cart1;  
   console.log(cart1);  
   
   const {
    id,
      price,
      weight, 
      category,
      description,
      size,
      img, 
  }= cart;

  const [Quantity, setQuantity] = useState(quantity);

  const increase = ()=> {
    if(Quantity >= 1){
      setQuantity(Quantity + 1)
    }
 }
 const decrease =()=>{
  if(Quantity > 1){
    setQuantity(Quantity -1)
  }
 }
 const calcPrice =(Quantity)=>{
  // console.log();
  return  Quantity

 }
 const totalPrice =(Quantity)=>{
     return price*Quantity;
 }
  return (
    <>
   
    <div className='cartitem'>
      <div className="cart-main">
         <div className="cart1">
           <img src={img} alt="img" />
      </div>
     <div className="cart2">
      <span>
      <b>{description}</b>
      <p className='details' > category : {category}</p>
      <p className='details' >weight : {weight}</p>
      <p className='details' >size : {size}</p>
      </span>
     </div>
      </div>
      <div className="cart-main1">
      <p>₹{price}</p>
      <span className='span'>
        <button className='btn1' onClick={decrease} >-</button>
      <button disabled className='quantity' onClick={calcPrice}>{Quantity}</button>
      <button className='btn3' onClick={increase} >+</button>
      </span>
      <span className='span2'>
        <p>₹{totalPrice(Quantity)}</p>
      <RxCross2 onClick={()=> removeItem(id)}/> 
      </span>
      
      </div>
     
    
    </div>

    </>
  )
}

export default CartItem