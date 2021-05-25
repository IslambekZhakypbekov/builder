import classes from "./PiePreview.module.css";

import PieIngredient from "../Pies/Pies";

import piesBackground from "../../../images/plate.png";
const PiePreview = ({ pies, price }) => {
  const result = [];
  for (const ingredient in pies) {
    for (let i = 0; i < pies[ingredient]; i++) {
      result.push(<PieIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.PiePreview}>
      
        <div className={classes.Pie}>
        <div className={classes.pies}
            style={{ backgroundImage: `url(${piesBackground})` }}>
            <div className={classes.div}>{result} </div>
          </div>
        </div>
     
      <div className={classes.price}>{price} som</div>
    </div>
  );
}

export default PiePreview;