import productActionTypes from "./productsActionTypes";
import getProducts from "../../functions/getProducts";

export const LOAD_PRODUCTS = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.LOADING });
    const products = await getProducts("fetchAll");
    dispatch({ type: productActionTypes.LOAD_PRODUCTS, payload: products });
  } catch (err) {
    dispatch({
      type: productActionTypes.SOMETHING_WENT_FISHY,
      payload: err.message,
    });
  }
};

export const LOAD_HOTTEST_PRODUCTS = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.LOADING });
    const products = await getProducts("fetchHottest");
    dispatch({
      type: productActionTypes.LOAD_HOTTEST_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    dispatch({
      type: productActionTypes.SOMETHING_WENT_FISHY,
      payload: err.message,
    });
  }
};

export const LOAD_LATEST_PRODUCTS = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.LOADING });
    const products = await getProducts("fetchLatest");
    dispatch({
      type: productActionTypes.LOAD_LATEST_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    dispatch({
      type: productActionTypes.SOMETHING_WENT_FISHY,
      payload: err.message,
    });
  }
};
