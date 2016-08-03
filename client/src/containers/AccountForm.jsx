import React from "react";
import { connect } from "react-redux";

import AccountForm from "../components/AccountForm";
import { submitAccountForm } from "../async_actions/account";

function mapStateToProps(state, ownProps) {
  let account  = state.main.get("account");
  let response = state.main.get("response");

  return({
    account:   account ? account.toJS() : account,
    authError: state.main.get("accountError"),
    response:  response ? response.toJS() : response
  })
}

const dispatchProps = {
  submitForm: submitAccountForm
}

export default connect(mapStateToProps, dispatchProps)(AccountForm);
