import userActionTypes from "./userActionTypes";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOADING:
      return {
        ...state,
        loading: false,
      };

    case userActionTypes.SOMETHING_WENT_SHIT:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case userActionTypes.LOGIN:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };

    case userActionTypes.LOGOUT:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
};

export default userReducer;
