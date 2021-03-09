import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
