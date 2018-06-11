import React from "react";
import { Component } from "react";
import Moment from "react-moment";
import "./TopRightNav.css";

class TopRightNav extends Component {
  render() {
    return (
      <div className="TopRightNav">
        <div className="columns">
          <Moment format="h : mm A">{Date.now()}</Moment>
          <p>{this.props.currency || 0}</p>
          <img src={this.props.profilePicture || ""} alt="profile picture" />
        </div>
      </div>
    );
  }
}

export default TopRightNav;
