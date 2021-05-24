import classes from "./CheckoutSummary.module.css";

import PiePreview from "../../PieBuilder/PiePreview/PiePreview";
import CheckoutForm from '../ChekoutForm/CheckoutForm'


const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PiePreview pies={{
          applePie: 10,
          cherryPie: 10,
          bun: 50,
        }}
          price={180} />
      </div>
      <div>
        <CheckoutForm
          submitCallback={submitCallback}
          cancelCallback={cancelCallback} />
      </div>
    </div>
  );
}

export default CheckoutSummary;