import React from "react";

import classes from "./Pies.module.css";
import applePie from "../../../images/applePie.jpg";
import cherryPie from "../../../images/cherryPie.png";
import fruitCake from "../../../images/fruitCake.png";
import nutPie from "../../../images/nutPie.png";
import bun from "../../../images/bun.png";
import pumpkinPie from "../../../images/pumpkinPie.png";

const PieIngredient = ({ type, fixed }) => {
  const types = {
    applePie: { backgroundImage: `url(${applePie})`, width: "35px", height: "35px" },
    cherryPie: { backgroundImage: `url(${cherryPie})`, width: "50px", height: "50px" },
    fruitCake: { backgroundImage: `url(${fruitCake})`, width: "35px", height: "35px" },
    nutPie: { backgroundImage: `url(${nutPie})`, width: "30px", height: "30px" },
    bun: { backgroundImage: `url(${bun})`, width: "30px", height: "30px" },
    pumpkinPie: { backgroundImage: `url(${pumpkinPie  } )`, width: "35px", height: "35px" },
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

    return distance < 
    PieRadius
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
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PieIngredient} style={types[type]}></div>
  );
}

export default React.memo(PieIngredient);