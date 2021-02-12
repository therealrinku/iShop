import productActionTypes from "./productsActionTypes";
import getProducts from "../../functions/getProducts";

export const LOAD_PRODUCTS = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.LOADING_PRODUCTS });
    const products = await getProducts();
    dispatch({ type: productActionTypes.LOAD_PRODUCTS, payload: products });
  } catch (err) {
    dispatch({
      type: productActionTypes.SOMETHING_WENT_FISHY,
      payload: err.message,
    });
  }
};
