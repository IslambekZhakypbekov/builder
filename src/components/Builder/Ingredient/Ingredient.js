import React from "react";

import classes from "./Ingredient.module.css";
import applePie from "../../../images/applePie.png";
import bun from "../../../images/bun.png";
import cherryPie from "../../../images/cherryPie.png";
import cake from "../../../images/cake.png";
import fruitCake from "../../../images/fruitCake.png";
import pumpkinPie from "../../../images/pumpkinPie.png";
import nutPie from '../../../images/nutPie.png'
    


const Ingredient = ({ type, fixed }) => {
  const types = {
    applePie: { backgroundImage: `url(${applePie})`, width: "35px", height: "35px" },
    cherryPie: { backgroundImage: `url(${cherryPie})`, width: "35px", height: "35px" },
    bun: { backgroundImage: `url(${bun})`, width: "50px", height: "50px" },
    fruitCake: { backgroundImage: `url(${fruitCake})`, width: "10px", height: "10px" },
    cake: { backgroundImage: `url(${cake})`, width: "20px", height: "20px" },
    pumpkinPie: { backgroundImage: `url(${pumpkinPie})`, width: "40px", height: "40px" },
    nutPie: { backgroundImage: `url(${nutPie})`, width: "40px", height: "40px" },

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




