import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients)
    .map(ingredient =>
      <em key={ingredient}>
        <strong> {ingredient}:</strong> -
      {ingredients[ingredient]}
      </em>)

  return (
    <ul className={classes.Order}>
      <li><span>Your name:</span> {name}</li>
      <li><span>Ypur address:</span> {address}</li>
      <li><span>Ypur phone:</span> {phone}</li>
      <li className={classes.pies}><span>Pies:</span> {outputIngredients}</li>
      <li><span>Price:</span> {price}</li>
    </ul>
  );
}

export default Order;