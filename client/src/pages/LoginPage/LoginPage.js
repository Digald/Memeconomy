import React, { Component } from "react";
import './LoginPage.css';

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Sign into your account";
  }
  render() {
    return <div className="LoginPage">Hello World</div>;
  }
}

export default LoginPage;
