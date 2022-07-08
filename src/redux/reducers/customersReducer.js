import { CUSTOMERS_TYPES } from "../actions/customersAction";

const initialState = {
  loading: false,
  data: [],
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case CUSTOMERS_TYPES.GET_CUSTOMERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default customersReducer;
