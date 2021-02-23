import cartActionTypes from "./cartActionTypes";
import getCartItems from "../../functions/getCartItems";

export const ADD_TO_CART = (productData) => (dispatch) => {
  dispatch({ type: cartActionTypes.ADD_TO_CART, payload: productData });
};

export const REMOVE_FROM_CART = (productId) => (dispatch) => {
  dispatch({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: productId,
  });
};

export const INCREASE_ITEM_QUANTITY = (productId) => (dispatch) => {
  dispatch({
    type: cartActionTypes.INCREASE_ITEM_QUANTITY,
    payload: productId,
  });
};

export const DECREASE_ITEM_QUANTITY = (productId) => (dispatch) => {
  dispatch({
    type: cartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: productId,
  });
};

export const LOAD_CART = (email) => async (dispatch) => {
  try {
    dispatch({ type: cartActionTypes.LOADING_CART });
    const cartItems = await getCartItems(email);
    dispatch({
      type: cartActionTypes.LOAD_CART,
      payload: JSON.parse(cartItems),
    });
  } catch (err) {
    dispatch({
      type: cartActionTypes.SOMETHING_WENT_WRONG,
      payload: err.message,
    });
  }
};

export const CLEAR_CART = () => (dispatch) => {
  dispatch({ type: cartActionTypes.CLEAR_CART });
};
