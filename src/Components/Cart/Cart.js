import React,{useContext} from 'react';
import CartItem from './CartItem';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import CartContext from '../../Store/Cart-context';

const Cart = props =>{

  const addItemHandlar = (item) =>{
    cartCtx.addItem({...item, amount :1})
  };
  const removeItemHandlar = (id) => {
    cartCtx.removeItem(id)
  };

   const cartCtx = useContext(CartContext);
   const totalAmount = `Rs ${cartCtx.totalAmount}`;
   const hasItem = cartCtx.items.length > 0;
   const cartItems = (
     <ul className={classes["cart-items"]}>
       {cartCtx.items.map((item) => (
         <CartItem 
         key ={item.id} 
         name = {item.name}
         amount = {item.amount} 
         price ={item.price}
         onAdd ={addItemHandlar.bind(null,item)}
         onRemove ={removeItemHandlar.bind(null, item.id)}
        />
       ))}
     </ul>
   );  
 
  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          Close
        </button>
        {hasItem && <button className={classes.button}> Order</button>}
      </div>
    </Model>
  ); 
}

export default Cart;