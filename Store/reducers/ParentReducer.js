import * as actionTypes from "../actions/actionTypes";

const initialState = {
  parent: {
    wallet: ""
  },
  orderHistory: [],
  loading: true,
  notAlowedItems: [],
  checkedItems:[],
};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PARENT_PROFILE:
      return {
        ...state,
        parent: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_PARENT_WALLET:
      state.parent.wallet = action.payload;
      return {
        ...state,
        parent: { ...state.parent },
        loading: false
      };
    case actionTypes.UPDATE_STUDENT_LIMIT:
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
    case actionTypes.ADD_CHECKED_ITEM:
      return {
        ...state,
        checkedItems: state.checkedItems.concat(action.payload)
      };
    case actionTypes.RM_CHECKED_ITEM:
      return {
        ...state,
        checkedItems: state.checkedItems.filter(itemID => itemID !== action.payload) 
      };
    case actionTypes.SET_CHECKED_ITEMS:
      return {
        ...state,
        checkedItems:action.payload
      }
    default:
      return state;
  }
};

export default classReducer;
