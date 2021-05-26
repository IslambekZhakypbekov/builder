import React from "react";

import classes from "./Ingredient.module.css";
import salamiBackground from "../../../images/salami.svg";
import tomatoBackground from "../../../images/tomato.svg";
import blackOliveBackground from "../../../images/blackOlive.svg";
import greenOliveBackground from "../../../images/greenOlive.svg";
import redPepperBackground from "../../../images/redPepper.svg";
import yellowPepperBackground from "../../../images/yellowPepper.svg";

const Ingredient = ({ type, fixed }) => {
  const types = {
    applePie: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    cherryPie: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
    bun: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
    friutCake: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
    nutPie: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
    pumpkinPie: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const Diameter = 380;
    const Radius = Diameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * Diameter);
    const ingredientLeft = Math.round(Math.random() * Diameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - Radius, 2) + Math.pow(ingredientLeft - Radius, 2)
    ) + ingredientRadius;

    return distance < Radius
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
    <div className={classes.Ingredient} style={types[type]}></div>
  );
}

export default React.memo(Ingredient);