export const AUTH_TYPES = {
  REGISTER: "AUTH_REGISTER",
  LOGIN: "AUTH_LOGIN",
  LOGOUT: "AUTH_LOGOUT",
};

export const registerUser =
  ({ userData }) =>
  async (dispatch) => {
    dispatch({
      type: AUTH_TYPES.REGISTER,
      payload: userData,
    });
  };
