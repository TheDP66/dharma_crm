import { combineReducers } from "redux";
import customers from "./customersReducer";
import products from "./productsReducer";
import buyers from "./buyersReducer";
import auth from "./authReducer";

export default combineReducers({
  auth,
  buyers,
  products,
  customers,
});
