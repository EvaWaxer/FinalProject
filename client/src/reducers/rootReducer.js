import { combineReducers } from "redux";

import fetchSchoolsReducer from "./fetchSchoolsReducer";
//import userReducer from "./userReducer";

const rootReducer = combineReducers({
  fetchSchoolsReducer,
  //userReducer
});

export default rootReducer;
