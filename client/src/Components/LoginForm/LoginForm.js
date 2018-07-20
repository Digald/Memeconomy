import React, { Component } from "react";
import "./LoginForm.css";

/* 
This component will be the form that users will use to sign in if they 
already have an account.
*/

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <h1 className="LoginForm__login-title">Sign Into An Existing Account</h1>
        <form className="LoginForm__input-fields">
          <label>Email</label>
          <input name="email" type="text" />
          <label>Password</label>
          <input name="password" type="password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
