import Button from "../../UI/Button/Button";
import Control from "./Control/Control";
import classes from "./Controls.module.css";

const Controls = ({
  ingredients,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render  control for this ingredient
    results.push(<Control
        key={ingredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.Controls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default Controls;