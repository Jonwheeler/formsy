import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";

import AccountForm from "./containers/AccountForm";
import { fetchAccount } from "./routing/callbacks";

export default (
  <Route component = { App }>
    <Route path = "/" component = { AccountForm } onEnter = { fetchAccount() }/>
  </Route>
)
