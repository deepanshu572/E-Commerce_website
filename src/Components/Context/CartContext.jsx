import { createContext , useContext, useReducer  } from "react";
import reducer from '../Reducer/CartReducer'

const CartContext = createContext();
// const getLocalCartData = ()=>{
//     let localCartData = localStorage.getItem("DK_STORE");

//     if(localCartData == []){
//         return[];
//     }else{
//         return JSON.parse(localCartData);
//     }
//}
    const  initialstate = {
        cart:[],
        total_item : "",
        total_amount: "",
        shipping_fee : 50000,

    }

    const CartProvider = ({children})=>{
    const [state, dispatch] = useReducer( reducer , initialstate)     
    const addToCart =  ( id , quantity, menu , texture  ) =>{
        dispatch({ type: "ADD_TO_CART" , payload : { id ,quantity , menu , texture  }})

    }
    
    const removeItem =(id)=> {
        dispatch({ type :  "REMOVE_ITEM" , payload : id})
    }
     
    const clearCart = () =>{
      dispatch({ type: "CLEAR_CART" })
    }
    // const  cartValue =()=>{
    //     dispatch({ type: "CART_VALUE" })
    // }
    // useEffect(() => {
    //     localStorage.setItem("DK_STORE", JSON.stringify(state.cart))
      
    //   }, [state.cart])
   return(
      <CartContext.Provider value={{ ...state , addToCart , removeItem , clearCart } }>
      {children}
      </CartContext.Provider>

   )
}

const useCartContext = () =>{
    return useContext(CartContext)
}

export { CartProvider , useCartContext};