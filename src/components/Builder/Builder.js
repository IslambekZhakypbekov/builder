import Preview from "./Preview/Preview";
import Controls from "./Controls/Controls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./Builder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const Builder = ({ history }) => {
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
      history.push("/auth");
    }
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    history.push('/checkout');
  }

  return (
    <div className={classes.Builder}>
      <Preview
        ingredients={ingredients}
        price={price} />
      <Controls
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

export default withAxios(Builder, axios);