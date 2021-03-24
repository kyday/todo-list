import { combineReducers } from "redux";
import todoListReducer from "../store/todoReducer/reducer";

const rootReducer = combineReducers({ todoListReducer });

export default rootReducer;
