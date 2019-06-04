import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./rootReducer";

let reduxDebugEnhancer = compose;

if (__DEV__) {
    reduxDebugEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const enhancer = compose(applyMiddleware(thunk), reduxDebugEnhancer());

export default createStore(reducers, enhancer);
