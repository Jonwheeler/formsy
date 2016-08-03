import React, { Component } from "react";
import Loader from "react-loaders";

require("../assets/styles/_theme.scss");
require("../assets/styles/_loaders.scss");

class AccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirm: false,
      isSubmittingForm: false
    }
  }

  render() {
    if ( !this.props.account ) return <Loader type = "pacman" active = { true } />
    if ( this.props.authError ) return this.unauthorized();

    let { name, companyName, accountID } = this.props.account 

    return (
      <section className = "account-form">
        <h1>Hello { name }</h1>
        <p>Please complete the form below and confirm your information</p>
        <ul>
          <li>
            <strong>Company Name:</strong> { companyName }
          </li>
          <li>
            <strong>Account #:</strong> { accountID }
          </li>
          <li>
            <strong>Name:</strong> { name }
          </li>
        </ul>

        { this.renderForm() }
      </section>
    )
  }

  unauthorized() {
    return <p>Invalid token</p>;
  }

  renderForm() {
    if ( this.props.account.completed ) return this.renderCompleted();
    if ( this.state.isSubmittingForm ) return <Loader type = "pacman" active = { true } />;

    return(
      <form onSubmit = { (e) => this.submitForm(e) } >
        <div className="form-group">
          <label for="job-number">Job Number</label>
          <input type="text" className="form-control" id="job-number" placeholder="Job Number" onChange = { (e) => this.setState({ jobNumber: e.target.value.trim() }) } />
        </div>
        <div className="form-group">
          <label for="job-title">Job Title</label>
          <input type="text" className="form-control" id="job-title" placeholder="Job Title" onChange = { (e) => this.setState({ jobTitle: e.target.value.trim() }) }/>
        </div>
        <div className="form-group">
          <label for="job-title">Job Title</label>
          <textarea className="form-control" id="job-description" placeholder="Job Description" onChange = { (e) => this.setState({ jobDescription: e.target.value.trim() }) }/>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange = { (e) => this.setState({ confirm: !this.state.confirm }) } /> Confirm Data
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }

  submitForm(e) {
    e.preventDefault();

    const formData = {
      jobNumber:      this.state.jobNumber,
      jobTitle:       this.state.jobTitle,
      jobDescription: this.state.jobDescription,
      confirm:        this.state.confirm
    };

    this.setState({
      isSubmittingForm: true
    })

    this.props.submitForm(this.props.account.id, formData);
  }

  renderCompleted() {
    let response;
    if ( this.props.response ) {
      response = (
        <pre>
          { JSON.stringify(this.props.response) }
        </pre>
      ) 
    };

    return(
      <section className="completed">
        <h1>Thank you for completing your form</h1>
        { response }
      </section>
    )
  }
}

export default AccountForm;
