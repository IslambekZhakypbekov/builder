import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./PieBuilder.module.css";

import PiePreview from "./PiePreview/PiePreview";
import PieControls from "./PieControls/PieControls";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const PieBuilder = ({ history , green}) => {
  const pies = useSelector(state => state.pies);
  const price = useSelector(state => state.price);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setpies(Object.values(response.data.pies));
  //       // For objects
  //       setpies(response.data.pies);
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
        pies={pies}
        price={price} />
      <PieControls
        pies={pies}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
        <OrderSummary
          pies={pies}
          price={price}
        />
        <Button onClick={finishOrdering} green={green}>Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default PieBuilder;