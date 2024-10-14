import { combineReducers } from "redux";
import appReducers from "./appReducers";

const rootReducers = combineReducers({
  app: appReducers,
});

export default rootReducers;
