import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./PieBuilder.module.css";

import PiePreview from "./PiePreview/PiePreview";
import PieControls from "./PieControls/PieControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const PieBuilder = ({ history , green}) => {
  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.PieBuilder}>
      <PiePreview
        ingredients={ingredients}
        price={price} />
      <PieControls
        ingredients={ingredients}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
        />
        <Button onClick={finishOrdering} green={green}>Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default PieBuilder;