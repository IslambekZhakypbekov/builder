import React from "react";

import classes from "./Pies.module.css";
import pirog1 from "../../../images/pirog.svg";
import keks from "../../../images/keks.png";
import pirog2 from "../../../images/pirog2.svg";
import cake from "../../../images/cake.svg";
import cake2 from "../../../images/cake2.svg";
import pirog3 from "../../../images/pirog3.png";

const PieIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${pirog1})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${keks})`, width: "50px", height: "50px" },
    blackOlive: { backgroundImage: `url(${pirog2})`, width: "35px", height: "35px" },
    greenOlive: { backgroundImage: `url(${cake})`, width: "30px", height: "30px" },
    redPepper: { backgroundImage: `url(${cake2})`, width: "30px", height: "30px" },
    yellowPepper: { backgroundImage: `url(${pirog3} )`, width: "35px", height: "35px" },
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
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PieIngredient} style={types[type]}></div>
  );
}

export default React.memo(PieIngredient);