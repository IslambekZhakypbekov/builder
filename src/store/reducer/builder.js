import { ADD_PIES, REMOVE_PIES, SET_PIES } from "../actions/types";

const initialState = {
  pies: {
  },
  price: 0,
};
const prices = {
  tomato: 3.5,
  salami: 4,
  greenOlive: .3,
  blackOlive: .3,
  redPepper: 2,
  yellowPepper: 1,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_PIES:
      newState.pies[action.pies]++;
      newState.price += prices[action.pies];
      break;
    case REMOVE_PIES:
      newState.pies[action.pies]--;
      newState.price -= prices[action.pies];
      break;
    case SET_PIES:
      return { ...action.data };
  
    default:
      break;
  }

  return newState;
}

export default builder;