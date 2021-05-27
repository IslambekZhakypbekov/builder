import { ADD_PIE, REMOVE_PIE, SET_PIES } from "../actions/types";

const initialState = {
  ingredients: {
  },
  price: 0,
};
const prices = {
  bun: 10,
  cake: 50,
  applePie: 150,
  cherryPie: 60,
  redPepper: 25,
  fruitCake: 42,
  nutPie:13,
  pumpkinPie:55,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_PIE:
      console.log(action);
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_PIE:
      console.log(action);
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_PIES:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;