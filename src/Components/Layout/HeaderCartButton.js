import React,{useContext} from "react";
import CartContext from "../../Store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props=>{
  const cartCtx = useContext(CartContext);
  const numberOFCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;

  },0)
  


 return (
   <button className={classes.button} onClick={props.onClick}>
     <span className={classes.icon}>
       <CartIcon />
     </span>
     <span> your Cart</span>
     <span className={classes.badge}> {numberOFCartItems}</span>
   </button>
 );
}

export default HeaderCartButton;