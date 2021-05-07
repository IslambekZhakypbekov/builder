import React from "react";

  import classes from "./PizzaIngredient.module.css";
  import pirog1 from "../../../images/pirog.png";
// import tomatoBackground from "../../../images/tomato.svg";
// import blackOliveBackground from "../../../images/blackOlive.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${pirog1})`, width: "35px", height: "35px" },
    // tomato: { backgroundImage: `url(${pirog1})`, width: "35px", height: "35px" },
    // blackOlive: { backgroundImage: `url(${pirog1})`, width: "10px", height: "10px" },
    // greenOlive: { backgroundImage: `url(${pirog1})`, width: "10px", height: "10px" },
    // redPepper: { backgroundImage: `url(${pirog1})`, width: "20px", height: "20px" },
    // yellowPepper: { backgroundImage: `url(${pirog1} )`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} ></div>
  );
}
// style={types[type]}
export default React.memo(PizzaIngredient);