import React from 'react';
import classes from'./MealsItem.module.css';

import MealItemForm from './MealItemForm';


const MealsItem = props =>{
    const price = `Rs ${props.price}`;

    return (
      <ul>
        <div className={classes.meal}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm/>
        </div>
      </ul>
    );
}

export default MealsItem;