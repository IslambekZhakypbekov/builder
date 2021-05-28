import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    applePie: "Apple Pie",
    bun: "Bun",
    cake: "Cake",
    cherryPie: "Cherry Pie",
    fruitCake: "Fruit Pie",
    nutPie: "Nut Pie",
    pumpkinPie: "Punpkin Pie",


  }
  const results = Object.keys(ingredients)
    .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul className={classes.results}>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;