import PizzaIngredient from "../../PizzaIngredient/PizzaIngredient";
import classes from "./PizzaControl.module.css";

const PizzaControl = ({ type, count }) => {
  return (
    <div className={classes.PizzaControl}>
      <button className={classes.more}>+</button>
      <div className={classes.ingredient}>
        <PizzaIngredient type={type} fixed />
      </div>
      <button className={classes.less}>-</button>
    </div>
  );
}

export default PizzaControl;