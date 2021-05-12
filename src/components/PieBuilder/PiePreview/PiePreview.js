import classes from "./PiePreview.module.css";

import PieIngredient from "../PieIngredient/PieIngredient";

import ingredientsBackground from "../../../images/plate.png";
const PiePreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PieIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PiePreview}>
      <div className={classes.Pie}>
        <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default PiePreview;