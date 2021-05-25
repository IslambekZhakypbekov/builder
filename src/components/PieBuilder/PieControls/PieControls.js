import classes from "./PieControls.module.css";

import Button from "../../UI/Button/Button";
import PieControl from "./PieControl/PieControl";

const PieControls = ({
  pies,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in pies) {
    total += pies[ingredient];
    results.push(<PieControl
      key={ingredient}
      count={pies[ingredient]}
      type={ingredient} />)
  }

  return (
    <div className={classes.PieControls}>
      <strong>Pies</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default PieControls;