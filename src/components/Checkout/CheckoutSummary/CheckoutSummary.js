import classes from "./CheckoutSummary.module.css";
import PizzaPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";
import CheckoutForm from '../ChekoutForm/CheckoutForm'


const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PizzaPreview ingredients={{
          tomato: 5,
          salami: 10,
          greenOlive: 50,
        }} price={180} />
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