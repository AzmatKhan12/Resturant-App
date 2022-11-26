
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    Id: "m1",
    name: "Chicken Biryani",
    description: "Roasted chicken with high Quality Rice",
    prise: "400",
  },
  {
    Id: "m2",
    name: "Mutton Biryani",
    description: "Pahadi Bakra with desi masala",
    prise: "1000",
  },
  {
    Id: "m3",
    name: "Mutton Mandi",
    description: "Roasted Mutton, with egg and Soup",
    prise: "1600",
  },
  {
    Id: "m4",
    name: "Tangdi kabab",
    description: "12 pice Rosted  crunchy or jucy",
    prise: "4000",
  },
];

const AvailabelMeals = () =>{
   const mealsList = DUMMY_MEALS.map(meaal =><li>{meaal.name}</li>)
  
    return (
    <section className={classes.meal}>
       <ul> 
           {mealsList}
       </ul>
    </section>
    );
}

export default AvailabelMeals;