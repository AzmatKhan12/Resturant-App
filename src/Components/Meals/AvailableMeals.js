
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    Id: "m1",
    name: "Chicken Biryani",
    description: "Roasted chicken with high Quality Rice",
    price: "400",
  },
  {
    Id: "m2",
    name: "Mutton Biryani",
    description: "Pahadi Bakra with desi masala",
    price: "1000",
  },
  {
    Id: "m3",
    name: "Mutton Mandi",
    description: "Roasted Mutton, with egg and Soup",
    price: "1600",
  },
  {
    Id: "m4",
    name: "Tangdi kabab",
    description: "12 pice Rosted  crunchy or jucy",
    price: "4000",
  },
];

const AvailabelMeals = () =>{
 const mealsList = DUMMY_MEALS.map((meal) => (
   <MealsItem
     key={meal.Id}
     name={meal.name}
     description={meal.description}
     price={meal.price}
   />
 ));
  
 return <section className={classes.meal}>
   <Card>
     <ul>{mealsList}</ul>
   </Card>
  </section>
    
}

export default AvailabelMeals;