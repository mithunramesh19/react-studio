import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */




function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const arr = []
  const [cart, setCart] = useState(Array(bakeryData.length).fill(0));
  const [cartTotal, setCartTotal] = useState(0);

  function incrementCart(index, price){
      cart[index] = cart[index] + 1 || 1;
      setCart({...cart});
      const tot_price = cartTotal + price
      console.log(tot_price)
      setCartTotal(tot_price);
      
  }

  function clearCart(){
      setCart(Array(bakeryData.length).fill(0));
      setCartTotal(0);
  }



  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item={item} index={index} onClick={incrementCart}/>
      ))}

      <div>
        <h2>Cart</h2>
        {bakeryData.map((item, index) => ( // TODO: map cart to CartItem components)}
          <CartItem item={item} quantity={cart[index]}/>
        ))}

        <h3> Total Price: {cartTotal} </h3>

        <button onClick={() => clearCart()}> Clear Cart </button>
      </div>
    </div>
  );
}

export default App;
