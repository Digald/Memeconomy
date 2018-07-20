import React, { Component } from "react";
import "./LoginForm.css";

/* 
This component will be the form that users will use to sign in if they 
already have an account.
*/

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

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
        <form className="LoginForm__input-fields">
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
