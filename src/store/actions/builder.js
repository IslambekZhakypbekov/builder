import axios from "../../axios";
import { ADD_PIES, REMOVE_PIES, SET_PIES } from "./types";

export const add = (ingredient) => ({
  type: ADD_PIES,
  ingredient: ingredient
});

export const remove = (ingredient) => ({
  type: REMOVE_PIES,
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