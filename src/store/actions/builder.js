import axios from "../../axios";
import { ADD_PIE, REMOVE_PIE, SET_PIES } from "./types";

export const add = (ingredient) => ({
  type: ADD_PIE,
  ingredient: ingredient
});

export const remove = (ingredient) => ({
  type: REMOVE_PIE,
  ingredient: ingredient
});

export const set = (data) => ({
  type: SET_PIES,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}