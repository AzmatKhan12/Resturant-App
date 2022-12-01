import React,{useRef,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = props =>{
  const [isAmountValid, setAmountValid] = useState (true)
  const amountInputRef = useRef()

  const submitHandlar = event => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount; // to convert string into a number

    if (enterdAmount?.trim().length === 0 ||
      enterdAmountNumber < 0 || enterdAmountNumber > 5 ){
      setAmountValid(false);
      return;
    }
      
    props.onAddToCart(enterdAmountNumber);  
  }


    return (
      <form className={classes.form} onSubmit={submitHandlar}>
        <Input
          label="Amount"
          ref={amountInputRef}
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ add</button>
        {!isAmountValid && <p>Please Enter valid amount(1-5) </p>}
      </form>
    );
}

export default MealItemForm;