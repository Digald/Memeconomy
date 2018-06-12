import React from "react";
import { Component } from "react";
import { Level } from 'reactbulma'
import Moment from "react-moment";
import "./TopRightNav.css";

class TopRightNav extends Component {
  render() {
    return (
      <div className="TopRightNav">
        <Level>
          <Moment format="h : mm A">{Date.now()}</Moment>
          <p>{this.props.currency || 0} MJ's</p>
          <img className="user-avatar" src={this.props.profilePicture || ""} alt="profile avatar" />
        </Level>
      </div>
    );
  }
}

export default TopRightNav;
