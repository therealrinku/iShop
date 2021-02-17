import userActionTypes from "./userActionTypes";

export const LOGIN = () => (dispatch) => {
  try {
    dispatch({ type: userActionTypes.LOADING });
    //login through backend here
    //dispatch({type:userActionTypes.LOGIN,payload:{}})
  } catch (err) {
    dispatch({
      type: userActionTypes.SOMETHING_GONE_WRONG,
      payload: err.message,
    });
  }
};

export const LOGOUT = () => (dispatch) => {
  dispatch({ type: userActionTypes.LOGOUT });
};
