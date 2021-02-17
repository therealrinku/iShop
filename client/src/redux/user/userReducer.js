import userActionTypes from "./userActionTypes";

const initialState = {
  userData: { email: null, is_admin: false },
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
        userData: { email: null, is_admin: null },
      };

    default:
      return state;
  }
};

export default userReducer;
