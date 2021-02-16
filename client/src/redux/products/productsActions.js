import productActionTypes from "./productsActionTypes";
import db from "../../firebase/db";

export const LOAD_PRODUCTS = () => async (dispatch) => {
  try {
    dispatch({ type: productActionTypes.LOADING_PRODUCTS });

    //get products
    db.collection("products")
      .get()
      .then((data) => {
        const finalData = [];
        data.forEach((e) => {
          finalData.push({ productId: e.id, ...e.data() });
        });
        console.log(finalData);
        dispatch({
          type: productActionTypes.LOAD_PRODUCTS,
          payload: finalData,
        });
      });
  } catch (err) {
    dispatch({
      type: productActionTypes.SOMETHING_WENT_FISHY,
      payload: err.message,
    });
  }
};
