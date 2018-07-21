import React, { Component } from "react";
import validate from "validate.js";
import userPost from "../../utils/user-post";
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

  submitForm(event) {
    /* When the form is submitted I validate every field before sending the 
    submitted data to my server. */
    event.preventDefault();

    const { email, displayName, password, confirmPass } = this.state;
    const constraints = {
      email: {
        email: true
      },
      displayName: {
        length: {
          minimum: 3,
          maximum: 10
        }
      },
      password: {
        length: {
          minimum: 6
        }
      },
      confirmPass: {
        equality: "password"
      }
    };

    const userData = {
      email,
      displayName,
      password,
      confirmPass
    };

    const validateEmail = validate({ email }, constraints);
    const validateName = validate({ displayName }, constraints);
    const validateConfirmPass = validate(
      { password, confirmPass },
      constraints
    );
    const validatePass = validate({ password }, constraints);

    if (
      !validateEmail &&
      !validateConfirmPass &&
      !validateName &&
      !validatePass
    ) {
      console.log("Pass all conditions, ready to POST");
      userPost.userSignUp(userData);
      return;
    }
    return;
  }

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
        <form
          className="SignUpForm__input-fields"
          onSubmit={event => this.submitForm(event)}
        >
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
