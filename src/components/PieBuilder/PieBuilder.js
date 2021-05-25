import PiePreview from "./PiePreview/PiePreview";
import PieControls from "./PieControls/PieControls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./PieBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const PieBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push('/auth');
    }
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
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(PieBuilder, axios);