import React, { Component } from "react";
import validate from "validate.js";
import userPost from "../../utils/user-post";
import "./LoginForm.css";
import Redirect from "../../../node_modules/react-router-dom/Redirect";

/* 
This component will be the form that users will use to sign in if they 
already have an account.
*/

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  submitForm(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const constraints = {
      email: {
        email: true
      },
      password: {
        length: {
          minimum: 6
        }
      }
    };

    const userData = {
      email,
      password
    };

    const validateEmail = validate({ email }, constraints);
    const validatePass = validate({ password }, constraints);

    if (!validatePass && !validateEmail) {
      console.log("Passed all conditions, ready to POST");
      userPost.userLogIn(userData);
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
      <div className="LoginForm">
        <h1 className="LoginForm__login-title">
          Sign Into An Existing Account
        </h1>
        <form
          className="LoginForm__input-fields"
          onSubmit={event => this.submitForm(event)}
        >
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
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
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
