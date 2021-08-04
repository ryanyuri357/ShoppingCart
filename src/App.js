import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";
import './App.css';
import BuyPage from "./components/BuyPage";


function App() {

  const [cartItem, setCartItem] = useState([]);

  const addToCart = item => {

    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    })

    if(isAlreadyAdded !== -1) {
      toast("Already added in cart", {
        type: "error"
      })
    }

    setCartItem([...cartItem, item]);
  }

  const buyNow = () => {
    setCartItem([])

    toast("Purchase Complete", {
      type: "success"
    });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };



  return (
    <div className="App">
      <BuyPage addToCart={addToCart}/>
    </div>
  );
}

export default App;
