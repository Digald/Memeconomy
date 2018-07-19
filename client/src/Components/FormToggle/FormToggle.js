import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleForm } from "./actions";
import "./FormToggle.css";

/* 
This is the the tabs at the bottom of the login form where you can select which form you are wanting
to use depending on if you are a new first time user or just signing in.
*/

class FormToggle extends Component {
  render() {
    const { loginIsToggled, signupIsToggled } = this.props;
    return (
      <div className="FormToggle">
        <div
          className={
            "FormToggle__sign-in" + (loginIsToggled ? "" : " toggled-styles")
          }
        >
          <p>Log In</p>
        </div>
        <div
          className={
            "FormToggle__new-user" + (signupIsToggled ? "" : " toggled-styles")
          }
        >
          <p>Sign Up</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginIsToggled: state.loginForm.loginIsToggled,
  signupIsToggled: state.loginForm.signupIsToggled
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleForm }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormToggle);
