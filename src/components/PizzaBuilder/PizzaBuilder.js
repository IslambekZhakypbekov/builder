import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";

const PizzaBuilder = () => {
  const prices = {
    tomato: 3.5,
    salami: 4,
    greenOlive: .3,
    blackOlive: .3,
    redPepper: 2,
    yellowPepper: 1,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(
    () => axios
      .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      }), []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview
        ingredients={ingredients}
        price={price} />
      <PizzaControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default PizzaBuilder;