import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
// import Ingredient from "../../Ingredient/Ingredient";
import classes from "./Control.module.css";

const Control = ({ type, count }) => {
  const dispatch = useDispatch();
  const labels = {
    applePie: "Apple Pie",
    cherryPie:"Salami",
    bun:"Green olives",
    friutCake:"Black olives",
    nutPie:"Red pepper",
    pumpkinPie: "Yellow pepper",
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