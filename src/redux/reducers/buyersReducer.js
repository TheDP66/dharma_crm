import { BUYERS_TYPES } from "../actions/buyersAction";

const initialState = {
  loading: false,
  data: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYERS_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BUYERS_TYPES.INSERT_BUYER:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
