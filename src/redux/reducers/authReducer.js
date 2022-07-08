import { AUTH_TYPES } from "../actions/authAction";

const initialState = {
  login: false,
  user: [],
  logged: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.REGISTER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case AUTH_TYPES.LOGIN:
      return {
        ...state,
        login: action.payload.login,
        logged: action.payload.user,
      };
    case AUTH_TYPES.LOGOUT:
      return {
        ...state,
        login: false,
        logged: "",
      };
    default:
      return state;
  }
};

export default authReducer;
