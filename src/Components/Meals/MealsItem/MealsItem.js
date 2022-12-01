import React ,{useContext}from 'react';
import classes from'./MealsItem.module.css';

import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/Cart-context';


const MealsItem = props =>{
    const price = `Rs ${props.price}`;
     
    const CartCtx= useContext(CartContext)
    const addToCarHandalr = amount =>{
        CartCtx.addItem({
          id: props.id,
          name: props.name,
          amount : amount,
          price : props.price
        })
    }

    return (
      <li>
        <div className={classes.meals}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCarHandalr} />
        </div>
      </li>
    );
}

export default MealsItem;