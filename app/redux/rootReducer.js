import { combineReducers } from "redux";
import { reducer as homeReducer } from "./../modules/home";

// This is where you combine all the reducers
const rootReducer = combineReducers({ home: homeReducer });

export default rootReducer;
