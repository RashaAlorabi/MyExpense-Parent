// Combine
import { combineReducers } from "redux";

// Reducers

import authReducer from "./authReducer";
import ParentReducer from "./ParentReducer";
// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  ParentReducer: ParentReducer
});
