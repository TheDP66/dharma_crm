export const PRODUCTS_TYPES = {
  LOADING: "LOADING_PRODUCTS",
  GET_PRODUCTS: "GET_PRODUCTS",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
};

export const getProducts =
  ({ products }) =>
  async (dispatch) => {
    dispatch({ type: PRODUCTS_TYPES.LOADING, payload: true });

    dispatch({
      type: PRODUCTS_TYPES.GET_PRODUCTS,
      payload: products,
    });

    dispatch({ type: PRODUCTS_TYPES.LOADING, payload: false });
  };
export const updateProduct =
  ({ newProduct }) =>
  async (dispatch) => {
    dispatch({ type: PRODUCTS_TYPES.LOADING, payload: true });

    dispatch({ type: PRODUCTS_TYPES.UPDATE_PRODUCT, payload: newProduct });

    dispatch({ type: PRODUCTS_TYPES.LOADING, payload: false });
  };
