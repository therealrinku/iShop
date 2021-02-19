import userActionTypes from "./userActionTypes";

export const LOGIN = (data) => (dispatch) => {
  dispatch({ type: userActionTypes.LOGIN, payload: { data } });
};

export const LOGIN_WITH_TOKEN = (token) => async (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOADING });
    const data = await loginWithToken(token);
    dispatch({ type: userActionTypes.LOGIN, payload: { data } });
  } catch (err) {
    dispatch({
      type: userActionTypes.SOMETHING_WENT_SHIT,
      payload: err.message,
    });
  }
  dispatch({ type: userActionTypes.LOGIN_WITH_TOKEN });
};

export const LOGOUT = () => (dispatch) => {
  dispatch({ type: userActionTypes.LOGOUT });
};
