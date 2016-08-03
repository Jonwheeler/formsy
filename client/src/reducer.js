import { Map } from "immutable";

export default function( state = Map(), action ) {
  switch( action.type ) {
    case "DID_RECEIVE_ACCOUNT":
      return state.set("account", Map(action.account));
    case "DID_GET_FORM_DATA":
      return state.set("account", Map(action.data.account)).set("response", Map(action.data.formData));
    case "ACCOUNT_FETCH_ERROR":
      return state.set("accountError", action.error.statusText).set("account", Map());
    case "FORM_SUBMIT_ERROR":
      return state.set("formError", action.error.statusText);
  }

  return state;
}  
