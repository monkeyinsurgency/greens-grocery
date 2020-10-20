import cart from "./Cart";
import products from "./Products";
import { combineReducers } from "redux";

const MainReducer = combineReducers({
  cart,
  products,
});

export default MainReducer;
