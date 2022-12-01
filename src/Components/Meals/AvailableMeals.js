
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Roasted chicken with high Quality Rice",
    price: "400",
  },
  {
    id: "m2",
    name: "Mutton Biryani",
    description: "Pahadi Bakra with desi masala",
    price: "1000",
  },
  {
    id: "m3",
    name: "Mutton Mandi",
    description: "Roasted Mutton, with egg and Soup",
    price: "1600",
  },
  {
    id: "m4",
    name: "Tangdi kabab",
    description: "12 pice Rosted  crunchy or jucy",
    price: "4000",
  },
];

const AvailabelMeals = () =>{
 const mealsList = DUMMY_MEALS.map((meal) => (
   <MealsItem
     key={meal.id}
     id ={meal.id}
     name={meal.name}
     description={meal.description}
     price={meal.price}
   />
 ));
  
 return <section className={classes.meals}>
   <Card>
     <ul>{mealsList}</ul>
   </Card>
  </section>
    
}

export default AvailabelMeals;