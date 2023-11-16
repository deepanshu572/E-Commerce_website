const CartReducer = (state , action) =>{
    if(action.type === "ADD_TO_CART") {
        let { id ,quantity, menu ,texture} = action.payload;
        console.log(menu);
        let cartProduct;
        cartProduct = {
            id : id,
            quantity: quantity,
            texture: texture,
            menu ,
        }

        return{
            ...state,
            cart : [...state.cart , cartProduct],

        };  
    } 
    if( action.type === "REMOVE_ITEM"){
        let cartProduct = state.cart.filter(
          (curItem)=> curItem.id != action.payload
          ) 
        return{
          ...state ,
          cart: cartProduct ,
        }
      }

      // if( action.type === "CART_VALUE"){ 
      //    if(state.cart.length == 0 || state.cart.length == null){
      //         return getLocalCartData
      //     }
      //     else{
      //       return state.cart.length
      //     }
      //   return{
      //       ...state,
      //   }
      // }
      if(action.type === "CLEAR_CART"){
        return{
          ...state,
          cart:[],
        }
      }
    return  state;
};
export default CartReducer;