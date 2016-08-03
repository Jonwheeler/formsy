import "whatwg-fetch";

export function fetchAccountInfo(accountToken) {
  return(
    (dispatch) => {
      return getAccountInfo(accountToken).then(
        data => {
          if (!data.ok) return Promise.reject(data);
          return data.json()
        }
      ).then(
        account => dispatch(didReceiveAccount(account)),
        error => dispatch(accountError(error))
      )
    }
  );
};

function getAccountInfo(accountToken) {
  return fetch(`http:\/\/localhost:8081?token=${accountToken}`);
}

function didReceiveAccount(account) {
  return({
    type: "DID_RECEIVE_ACCOUNT",
    account
  })
};

function accountError(error) {
  return({
    type: "ACCOUNT_FETCH_ERROR",
    error
  });
};

export function submitAccountForm(accountToken, accountData) {
  return(
    (dispatch) => {
      return(
        postAccountFormData(accountToken, accountData)
      ).then(
        (data) => {
          if ( !data.ok ) return Promise.reject(data);
          return data.json();
        }
      ).then(
        formData => dispatch(didGetFormDataResponse(formData)),
        error    => dispatch(handleFormError(error))
      )
    }
  );
}
  
function postAccountFormData(accountToken, accountData) {
  return(
   fetch(`http:\/\/localhost:8081/${accountToken}/process`, {
      method: "POST",
      headers: {
        "Accept":       "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ formData: accountData })
    })
  );
}

function didGetFormDataResponse(data) {
  return({
    type: "DID_GET_FORM_DATA",
    data
  })
}

function handleFormError(error) {
  return({
    type: "FORM_SUBMIT_ERROR",
    error
  });
}
