import productActionTypes from "./productsActionTypes";

const initialState = {
  products: [],
  latestProducts: [],
  hottestProducts: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.LOAD_LATEST_PRODUCTS:
      return {
        ...state,
        latestProducts: action.payload,
        loading: false,
      };

    case productActionTypes.LOAD_HOTTEST_PRODUCTS:
      return {
        ...state,
        hottestProducts: action.payload,
        loading: false,
      };

    case productActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };

    case productActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };

    case productActionTypes.SOMETHING_WENT_FISHY:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productsReducer;
