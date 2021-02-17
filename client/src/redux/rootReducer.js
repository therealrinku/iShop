import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";
import userReducer from "./user/userReducer";

const reducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

export default reducer;
