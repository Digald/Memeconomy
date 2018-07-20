import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "../../Components/LoginForm/LoginForm";
import FormToggle from "../../Components/FormToggle/FormToggle";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import "./LoginPage.css";

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Sign into your account";
  }
  render() {
    const { loginIsToggled} = this.props;
    return (
      <div className="LoginPage">
        <div className="LoginPage__formContainer">
          {loginIsToggled ? <LoginForm /> : <SignUpForm />}
          <FormToggle />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginIsToggled: state.loginForm.loginIsToggled
});

export default connect(mapStateToProps)(LoginPage);
