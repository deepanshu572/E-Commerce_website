import React from 'react'
import './Cart.css'
import { useCartContext } from '../Context/CartContext';
import CartItem from './CartItem';
import {Link} from "react-router-dom";

function Cart() {

  const {cart , shipping_fee ,clearCart  } = useCartContext();
  if(cart.length == 0){
    return(
    <div className='empty'>
             <p>Your cart is empty</p>
             <img src="https://static-00.iconduck.com/assets.00/empty-cart-illustration-512x428-mcol2auz.png" alt="" />
             <Link to="/ProductPage"> <button>keep browsering</button> </Link>
    </div>   
    )
  }
  return (
    <>
  
    <div className="contain">
   <h2>Your Items ({cart.length})</h2>
    <div className="head">
      <div className="head1">
         <p>item</p>
      </div>
      <div className="head2">
        <p>price</p>
       <p>Quantity</p>
       <p>Subtotal</p>
      </div>
       
    </div>
    <div className='wrapper'>

    
     {
    cart.map((curElem)=>{
       console.log(curElem);
      let x = curElem.menu[0]; 
      console.log(x);
        return  <CartItem cart={x}  cart1={curElem}  key={curElem.id}/>
    })
  }
  </div>
  <button className="button"
  onClick={()=>clearCart()}
  >
    Clear Cart
  </button>
  
  <div className="last">
    <p>Subtotal:  </p> 
     <p>Shipping Fee: {shipping_fee}</p>      
     <p>Order Total:</p>
    
    </div> 
    </div>
    </>
  )
}

export default Cart