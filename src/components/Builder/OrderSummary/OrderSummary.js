import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    bun:"Bun",

    // applePie: "Apple Pie",
    // cherryPie:"Cherry Pie",
    // friutCake:"Pumpkin Pie",
    // nutPie:"Fruit Cake",
    // pumpkinPie: "Nut Pie",
  
  }
  const results = Object.keys(ingredients)
    .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;