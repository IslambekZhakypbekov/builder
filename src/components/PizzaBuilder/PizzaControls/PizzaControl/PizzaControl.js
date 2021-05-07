import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient";
import classes from "./PizzaControl.module.css";

const PizzaControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.PizzaControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>
        <PizzaIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default PizzaControl;