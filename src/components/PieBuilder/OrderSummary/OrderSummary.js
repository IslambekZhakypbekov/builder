import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
 const labels = {
    tomato: "American Pie",
    salami: "Pie",
    greenOlive: "Cake",
    blackOlive: "Tort",
    redPepper: "Rort",
    yellowPepper: "Tort",
  }
  const results = Object.keys(ingredients)
    .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(0)} som</strong>
    </div>
  );
}

export default OrderSummary;

