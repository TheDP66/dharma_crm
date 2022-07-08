import { EditData } from "../actions/globalTypes";
import { PRODUCTS_TYPES } from "../actions/productsAction";

const initialState = {
  loading: false,
  data: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_TYPES.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    case PRODUCTS_TYPES.UPDATE_PRODUCT:
      return {
        ...state,
        data: EditData(state.data, action.payload.id, action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
