export const CUSTOMERS_TYPES = {
  LOADING: "LOADING_CUSTOMERS",
  GET_CUSTOMERS: "GET_CUSTOMERS",
  UPDATE_CUSTOMER: "UPDATE_CUSTOMER",
};

export const getCustomers =
  ({ customers }) =>
  async (dispach) => {
    dispach({ type: CUSTOMERS_TYPES.LOADING, payload: true });

    dispach({
      type: CUSTOMERS_TYPES.GET_CUSTOMERS,
      payload: customers,
    });

    dispach({ type: CUSTOMERS_TYPES.LOADING, payload: false });
  };
