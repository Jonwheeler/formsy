import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from 'react-router-redux'
import thunk from "redux-thunk";
import { routerReducer } from "react-router-redux";

import reducer from "./reducer";

const routing = routerMiddleware(browserHistory)

export default createStore(
  combineReducers({
    main:    reducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(thunk, routing),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
