import React, { Component } from "react";
import "./SignUpForm.css";

/* 
This form is used along side LoginForm. SignUpForm will render if a user is trying 
to create a new account.
*/

const SignUpForm = props => (
  <div className="SignUpForm">
    <h1 className="SignUpForm__signup-title">Make A New Account</h1>
    <form className="SignUpForm__input-fields">
      <label>Email</label>
      <input name="email" type="email" />
      <label>Display Name</label>
      <input name="display" type="text" />
      <label>Password</label>
      <input name="password" type="password" />
      <label>Confirm Password</label>
      <input name="confirmpass" type="password" />
      <button type="submit">Create Account</button>
    </form>
  </div>
);

export default SignUpForm;
