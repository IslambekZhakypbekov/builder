import { useDispatch } from "react-redux";

import classes from "./PieControl.module.css";

import Button from "../../../UI/Button/Button";
// import PieIngredient from "../../PieIngredient/PieIngredient";

const PieControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const labels = {
    applePie: "Apple Pie",
    cherryPie: "Cherry Pie",
    fruitCake:"Fruit Pie",
    nutPie:"Nut Pie ",
    bun:"Bun",
    pumpkinPie:"Pumpkin Pie",
  };
  return (
    <div className={classes.PieControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
      <div className={classes.ingredient}>
        {labels[type]}
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default PieControl;