import rootReducers from "./redux/reducers/rootReducers";
import { createStore } from "redux";

const reduxConfig = () => {
  const store = createStore(rootReducers);
  return { store };
};

export default reduxConfig;
