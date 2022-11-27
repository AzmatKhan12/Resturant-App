import classes from './MealsItem.module.css';

const MealsItem = props =>{
    const prise = `RS ${props.prise}`;

    return <li>
      <div className={classes.meal}>
         <h3 >{props.name}</h3>
         <div className={classes.description}>{props.description}</div>
         <div className={classes.prise}>{prise}</div>
      </div>
      <div>
      </div>
    </li>
}

export default MealsItem;