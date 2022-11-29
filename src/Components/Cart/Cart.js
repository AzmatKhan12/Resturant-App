import Model from '../UI/Model';
import classes from './Cart.module.css';


const Cart = props =>{
   const cartItems = (
     <ul className={classes["cart-items"]}>
       {[{ id: "m1", name: "Biryani", amount: 2, price: 200 }].map((item) => (
         <li>{item.name} </li>
       ))}
     </ul>
   );  

  return (
    <Model onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> 3000</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} 
          onClick= {props.onClose}> Close
        </button>
        <button className={classes.button}> Order</button>
      </div>
    </Model>
  ); 
}

export default Cart;