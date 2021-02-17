import userActionTypes from "./userActionTypes";

export const LOGIN = (data) => (dispatch) => {
  dispatch({ type: userActionTypes.LOGIN, payload: { data } });
};

export const LOGOUT = () => (dispatch) => {
  dispatch({ type: userActionTypes.LOGOUT });
};
