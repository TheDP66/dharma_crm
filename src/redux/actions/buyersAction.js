export const BUYERS_TYPES = {
  LOADING: "LOADING_BUYERS",
  GET_BUYERS: "GET_BUYERS",
  UPDATE_BUYER: "UPDATE_BUYER",
  INSERT_BUYER: "INSERT_BUYER",
};

export const insertBuyers =
  ({ custData, layananData, dibuat }) =>
  async (dispatch) => {
    dispatch({ type: BUYERS_TYPES.LOADING, payload: true });

    dispatch({
      type: BUYERS_TYPES.INSERT_BUYER,
      payload: {
        customer: custData,
        layanan: layananData,
        dibuat,
      },
    });

    dispatch({ type: BUYERS_TYPES.LOADING, payload: false });
  };
