import {fragment} from 'react';
import AvailabelMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () =>{
    return (
      <fragment>
        <MealsSummary />
        <AvailabelMeals />
      </fragment>
    );
   
}

export default Meals;