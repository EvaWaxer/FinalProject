import { combineReducers } from "redux";

import fetchSchoolsReducer from "./fetchSchoolsReducer";
import auth from "./auth";
import message from "./message"
//import userReducer from "./userReducer";

const rootReducer = combineReducers({
  fetchSchoolsReducer,
  auth,
  message,
  //userReducer
});

export default rootReducer;
