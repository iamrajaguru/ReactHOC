import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Home from "../reducer/home";
import Chart from "../reducer/chat"
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  combineReducers({
    Home,
    Chart
  }),
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
