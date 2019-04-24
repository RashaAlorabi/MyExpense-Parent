import * as actionTypes from "./actionTypes";

export const saveOrderHistory = (OrderHistory) => {
    return async dispatch => {
      try {
        dispatch({
          type: actionTypes.ORDER_HISTORY,
          payload: OrderHistory
        });
      } catch (err) {
        console.error("Error while fetching parent", err);
      }
    };
  };