import store from "../store";

import { fetchAccountInfo } from "../async_actions/account.js";

export function fetchAccount() {
  return ( nextState, replaceWith ) => {
    const token = nextState.location.query.token;
    store.dispatch(fetchAccountInfo(token));
  }
}
