import * as actionTypes from "../actions/actionTypes";

const initialState = {
  parent: {
    wallet: ""
  },
  orderHistory: [],
  loading: true,
  notAlowedItems: []
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARENT_PROFILE:
      console.log("parent reducer", action.payload);
      return {
        ...state,
        parent: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_PARENT_WALLET:
      console.log("wallet reducer", action.payload);
      state.parent.wallet = action.payload;
      return {
        ...state,
        parent: { ...state.parent },
        loading: false
      };
    case actionTypes.UPDATE_STUDENT_LIMIT:
      console.log("wallet reducer", action.payload);
      state.parent.child.limit = action.payload;
      return {
        ...state,
        parent: { ...state.parent },
        loading: false
      };
    case actionTypes.ORDER_HISTORY:
      return {
        ...state,
        orderHistory: action.payload
      };
    case actionTypes.NOT_ALLOWED_ITEMS:
      return {
        ...state,
        notAlowedItems: action.payload
      };
    default:
      return state;
  }
};

export default classReducer;
