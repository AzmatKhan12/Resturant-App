
import classes from './MealsSummary.module.css';

const MealsSummary = ()=>{
    return (
      <section className={classes.summary}>
        <h2> Delicious Food , Delivered to you</h2>
        <p>
          Choose your fevorite meals from our broad selection of avilable meals
          and enjoy a Delicious lunch or dinner at Home
        </p>
        <p>
          All our meals are cooked with High quality ingradient , just in time
          and of course by experience chefs!
        </p>
      </section>
    );
}

export default MealsSummary;