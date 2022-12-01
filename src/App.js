import React,{useState} from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {

  const [isCartShown, SetCartShown]= useState(false)

  const ShowCartHandlar = ()=>{
    SetCartShown(true)
  }

  const HideCartHandlar = ()=>{
    SetCartShown(false)
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={HideCartHandlar} />}
      <Header onShowCart={ShowCartHandlar} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
