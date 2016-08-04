import React, { Component } from "react";
import Loader from "react-loaders";

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
        <label for="job-number" className="label">Job Number</label>
        <div className="control">
          <input type="text" className="input" id="job-number" placeholder="Job Number" onChange = { (e) => this.setState({ jobNumber: e.target.value.trim() }) } />
        </div>
        <label for="job-title">Job Title</label>
        <div className="control">
          <input type="text" className="input" id="job-title" placeholder="Job Title" onChange = { (e) => this.setState({ jobTitle: e.target.value.trim() }) }/>
        </div>
        <label for="job-title" className="label">Job Title</label>
        <div className="control">
          <textarea className="textarea" id="job-description" placeholder="Job Description" onChange = { (e) => this.setState({ jobDescription: e.target.value.trim() }) }/>
        </div>

        <div className="control">
          <label className="checkbox">
            <input type="checkbox" onChange = { (e) => this.setState({ confirm: !this.state.confirm }) } /> Confirm Data
          </label>
        </div>
        <button type="submit" className="button is-primary">Submit</button>
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
      let { jobTitle, jobNumber, jobDescription, confirm } = this.props.response;
      response = (
        <ul className="response-data">
          <li><strong> Job Number: </strong> { jobNumber }</li>
          <li><strong> Job Title: </strong> { jobTitle }</li>
          <li><strong> Job Description: </strong> { jobDescription }</li>
          <li><strong> Confirmed: </strong> { confirm ? "Yes" : "No"  }</li>
        </ul>
      ) 
    };

    return(
      <div className="completed">
        <h1>Thank you for completing your form</h1>
        { response }
      </div>
    )
  }
}

export default AccountForm;
