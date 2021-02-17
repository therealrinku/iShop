import userActionTypes from "./userActionTypes";

const initialState = {
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
