import userActionTypes from "./userActionTypes";

const initialState = {
  userData: { email: null, isAdmin: false },
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOADING:
      return {
        ...state,
        loading: true,
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
        userData: { email: null, isAdmin: null },
      };

    case userActionTypes.SOMETHING_GONE_WRONG:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
