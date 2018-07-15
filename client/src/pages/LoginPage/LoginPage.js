import React, { Component } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
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
        </div>
      </div>
    );
  }
}

export default LoginPage;
