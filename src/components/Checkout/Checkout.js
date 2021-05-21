import axios from "../../axios";
import { useSelector } from "react-redux";


import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"
// import PiePreview from "../PieBuilder/PiePreview/PiePreview"

const Checkout = ({ history }) => {
  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);

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

      ingredients: ingredients,
      price: price,
    }

    axios.post('https://builder-56e21-default-rtdb.firebaseio.com/orders.json', order)
      .then(response => {
        history.replace('/');
      });
  }

  return (
    <div>
      {/* <PiePreview ingredients={ingredients} price={price} /> */}
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}

export default Checkout;