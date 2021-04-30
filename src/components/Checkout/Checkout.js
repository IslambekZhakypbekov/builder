import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      ingredients: {
        tomato: 0,
        salami: 5,
        greenOlives: 6,
        blackOlives: 10,
        redPepper: 10,
        yellowPepper: 10,
      }
    }

    axios.post('https://builder-56e21-default-rtdb.firebaseio.com/orders.json+', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default Checkout;