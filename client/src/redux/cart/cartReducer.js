import cartActionTypes from "./cartActionTypes";

const initialState = {
  cartItems: [],
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

    case cartActionTypes.INCREASE_ITEM_QUANTITY:
      const cartItemsCopy = [...state.cartItems];
      const selectedItemIndex = state.cartItems.findIndex(
        (item) => item.product_id === action.payload
      );
      cartItemsCopy[selectedItemIndex].productQuantity =
        cartItemsCopy[selectedItemIndex].productQuantity + 1;

      return {
        ...state,
        cartItems: cartItemsCopy,
      };

    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      const cartItemsCopy1 = [...state.cartItems];
      const selectedItemIndex1 = state.cartItems.findIndex(
        (item) => item.product_id === action.payload
      );
      cartItemsCopy1[selectedItemIndex1].productQuantity =
        cartItemsCopy1[selectedItemIndex1].productQuantity - 1;

      return {
        ...state,
        cartItems: cartItemsCopy1,
      };

    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product_id !== action.payload
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
