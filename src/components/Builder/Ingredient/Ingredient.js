import React from "react";

import classes from "./Ingredient.module.css";
import applePie from "../../../images/applePie.svg";
import cherryPie from "../../../images/cherryPie.svg";
import cake from "../../../images/cake.svg";
import pumpkinPie from "../../../images/pumpkinPie.svg";
import fruitCake from "../../../images/fruitCake.svg";
import nutPie from "../../../images/nutPie.svg";
import bun from "../../../images/bun.svg";

    


const Ingredient = ({ type, fixed }) => {
  const types = {
    applePie: { backgroundImage: `url(${applePie})`, width: "60px", height: "40px" },
    cherryPie: { backgroundImage: `url(${cherryPie})`, width: "60px", height: "40px" },
    bun: { backgroundImage: `url(${bun})`, width: "80px", height: "50px" },
    fruitCake: { backgroundImage: `url(${fruitCake})`, width: "60px", height: "50px" },
    cake: { backgroundImage: `url(${cake})`, width: "50px", height: "50px" },
    pumpkinPie: { backgroundImage: `url(${pumpkinPie})`, width: "65px", height: "40px" },
    nutPie: { backgroundImage: `url(${nutPie})`, width: "60px", height: "35px" },

  };

  function getPosition(ingredientWidth) {
    const pieDiameter = 380;
    const pieRadius = pieDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pieDiameter);
    const ingredientLeft = Math.round(Math.random() * pieDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pieRadius, 2) + Math.pow(ingredientLeft - pieRadius, 2)
    ) + ingredientRadius;

    return distance < pieRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.Ingredient} style={types[type]}></div>
  );
}

export default React.memo(Ingredient);




