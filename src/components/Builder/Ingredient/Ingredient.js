import React from "react";

import classes from "./Ingredient.module.css";
import applePie from "../../../images/applePie.jpg";
import bun from "../../../images/bun.png";
import cherryPie from "../../../images/cherryPie.png";
import nutPie from "../../../images/nutPie.png";
import fruitCake from "../../../images/fruitCake.png";
import pumpkinPie from "../../../images/pumpkinPie.png";

const Ingredient = ({ type, fixed }) => {
  const types = {
    applePie: { backgroundImage: `url(${applePie})`, width: "35px", height: "35px" },
    cherryPie: { backgroundImage: `url(${bun})`, width: "35px", height: "35px" },
    bun: { backgroundImage: `url(${cherryPie})`, width: "10px", height: "10px" },
    fruitCake: { backgroundImage: `url(${fruitCake})`, width: "10px", height: "10px" },
    nutPie: { backgroundImage: `url(${nutPie})`, width: "20px", height: "20px" },
    pumpkinPie: { backgroundImage: `url(${pumpkinPie})`, width: "40px", height: "40px" },
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
if (!types[type]) {
  console.log(types);
  console.log(type);
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