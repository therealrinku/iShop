import productActionTypes from "./productsActionTypes";

export const LOAD_PRODUCTS = () => (dispatch) => {
  dispatch({ type: productActionTypes.LOADING_PRODUCTS });
  //load
};
