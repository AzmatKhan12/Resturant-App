import { useReducer } from "react";
import CartContext from "./Cart-context";


const defaultCartState ={
  items: [],
  totalAmount:0
}

const cartReducer = (state, action) => {
  
    if (action.type === 'ADD'){
      //[...state.items, action.item]
      const updatedItems = state.items.concat(action.item);
      
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
       
      return  {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      };
       
    }
    // if(action.type ==='REMOVE'){

    // }
   
  return defaultCartState;
  
}


const CartProvider = props =>{

    const [cartState, dispatachCartAction]= useReducer(cartReducer,defaultCartState)

    const addItemToCartHandlar = (item)=>{
        dispatachCartAction ({type : 'ADD', item:item})
    };
    const removeITemToCartHandalr = (id)=>{
        dispatachCartAction({ type: "REMOVE", id: id});
    };

    const CartContexts = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandlar,
      removeItem: removeITemToCartHandalr
    };
    
   return (
        <CartContext.Provider value={CartContexts}>
          {props.children}
        </CartContext.Provider>
   );
}

export default CartProvider;