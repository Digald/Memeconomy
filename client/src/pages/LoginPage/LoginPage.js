import React, { Component } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import FormToggle from '../../Components/FormToggle/FormToggle';
import "./LoginPage.css";

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Sign into your account";
  }
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage__formContainer">
          <LoginForm />
          <FormToggle/>
        </div>
      </div>
    );
  }
}

export default LoginPage;
