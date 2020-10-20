import { FETCH_PRODUCTS } from "../actions/Products/types";

export const ProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload };
    default:
      return state;
  }
};
