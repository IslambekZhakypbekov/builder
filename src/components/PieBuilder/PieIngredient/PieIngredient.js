import React from "react";

import classes from "./PieIngredient.module.css";
import pirog1 from "../../../images/pirog.svg";
// import tomatoBackground from "../../../images/tomato.svg";
// import blackOliveBackground from "../../../images/blackOlive.svg";
// import greenOliveBackground from "../../../images/greenOlive.svg";
// import redPepperBackground from "../../../images/redPepper.svg";
// import yellowPepperBackground from "../../../images/yellowPepper.svg";

const PieIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${pirog1})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${pirog1})`, width: "35px", height: "35px" },
    blackOlive: { backgroundImage: `url(${pirog1})`, width: "10px", height: "10px" },
    greenOlive: { backgroundImage: `url(${pirog1})`, width: "10px", height: "10px" },
    redPepper: { backgroundImage: `url(${pirog1})`, width: "20px", height: "20px" },
    yellowPepper: { backgroundImage: `url(${pirog1} )`, width: "70px", height: "70px" },
  };

  function getPosition(ingredientWidth) {
    const PieDiameter = 475;
    const PieRadius = PieDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * PieDiameter);
    const ingredientLeft = Math.round(Math.random() * PieDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - PieRadius, 2) + Math.pow(ingredientLeft - PieRadius, 2)
    ) + ingredientRadius;

    return distance < PieRadius
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
    <div className={classes.PieIngredient} style={types[type]}></div>
  );
}

export default React.memo(PieIngredient);