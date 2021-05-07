import Button from "../../UI/Button/Button";
import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({
  ingredients,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    total += ingredients[ingredient];
    results.push(<PizzaControl
      key={ingredient}
      count={ingredients[ingredient]}
      type={ingredient} />)
  }

  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default PizzaControls;