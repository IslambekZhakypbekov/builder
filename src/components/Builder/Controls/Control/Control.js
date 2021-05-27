import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
// import Ingredient from "../../Ingredient/Ingredient";
import classes from "./Control.module.css";

const Control = ({ type, count }) => {
  const dispatch = useDispatch();
  const labels = {
    applePie: "Apple Pie",
    bun: "Bun",
    cake: "Cake",
    cherryPie: "Cherry Pie",
    fruitCake: "Fruit Pie",
    nutPie: "Nut Pie",
    pumpkinPie: "Pumpkin Pie",

   
  }
  return (
    <div className={classes.Control}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        {labels[type]}
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default Control;