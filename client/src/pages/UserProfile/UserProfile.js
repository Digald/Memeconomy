import React, { Component } from "react";

class UserProfile extends Component {
  componentDidMount() {
    document.title = "Your Profile";
  }
  render() {
    return <div className="UserProfile">hello world</div>;
  }
}

export default UserProfile;
