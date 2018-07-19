import React, { Component } from "react";
import "./FormToggle.css";

/* 
This is the the tabs at the bottom of the login form where you can select which form you are wanting
to use depending on if you are a new first time user or just signing in.
*/

class FormToggle extends Component {
  render() {
    return <div className="FormToggle">
        <div className="FormToggle__sign-in">
            <p>Log In</p>
        </div>
        <div className="FormToggle__new-user">
            <p>Sign Up</p>
        </div>
    </div>;
  }
}

export default FormToggle;
