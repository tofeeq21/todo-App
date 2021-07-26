import { applyMiddleware, createStore } from "redux";
import reducers from "../src/state/reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)