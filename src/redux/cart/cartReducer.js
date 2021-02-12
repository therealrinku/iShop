import cartActionTypes from "./cartActionTypes";

const initialState = {
  cartItems: [
    {
      productName: "Iphone12",
      productQuantity: 1,
      productImageURL: "https://bit.ly/39VLnZC",
    },
    {
      productName: "Lenovo k9",
      productQuantity: 4,
      productImageURL: "https://lnv.gy/3oVhHAr",
    },
  ],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.LOADING_CART:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case cartActionTypes.LOAD_CART:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: null,
      };

    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productName !== action.payload
        ),
      };

    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    case cartActionTypes.SOMETHING_WENT_WRONG:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
