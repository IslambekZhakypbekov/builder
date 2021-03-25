import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

import classes from "./PizzaPreview.module.css";
import ingredientsBackground from "../../../images/cheese.svg";

const PizzaPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default PizzaPreview;