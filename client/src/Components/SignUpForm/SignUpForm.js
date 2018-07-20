import React, { Component } from "react";
import "./SignUpForm.css";

/* 
This form is used along side LoginForm. SignUpForm will render if a user is trying 
to create a new account.
*/

class SignUpForm extends Component {
  state = {
    email: "",
    displayName: "",
    password: "",
    confirmPass: ""
  };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="SignUpForm">
        <h1 className="SignUpForm__signup-title">Make A New Account</h1>
        <form className="SignUpForm__input-fields">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={event => this.handleInputChange(event)}
            required
          />
          <label>Display Name</label>
          <input
            name="displayName"
            type="text"
            value={this.state.displayName}
            onChange={event => this.handleInputChange(event)}
            required
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={event => this.handleInputChange(event)}
            required
          />
          <label>Confirm Password</label>
          <input
            name="confirmPass"
            type="password"
            value={this.state.confirmPass}
            onChange={event => this.handleInputChange(event)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
