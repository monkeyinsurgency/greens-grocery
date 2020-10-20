import { FETCH_PRODUCTS } from "./types";
import { produce } from "../../data/produce";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: produce,
  });
};
