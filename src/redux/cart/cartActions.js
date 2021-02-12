import cartActionTypes from "./cartActionTypes";

export const ADD_TO_CART = (productData) => (dispatch) => {
  dispatch({ type: cartActionTypes.ADD_TO_CART, payload: productData });
};

export const REMOVE_FROM_CART = (productName) => (dispatch) => {
  dispatch({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: productName,
  });
};

export const LOAD_CART = () => (dispatch) => {
  dispatch({ type: cartActionTypes.LOADING_CART });
  //set cart
};

export const CLEAR_CART = () => (dispatch) => {
  dispatch({ type: cartActionTypes.CLEAR_CART });
};
