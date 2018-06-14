import React, { Component } from "react";
import { Level } from "reactbulma";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./TopRightNav.css";

class TopRightNav extends Component {
  state = {
    currentTime: Date.now()
  }

  componentWillMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({CurrentTime: Date.now()})
  }

  render() {
    return (
      <div className="TopRightNav">
        <Level>
          <Moment format="h : mm A">{this.state.time}</Moment>
          <p>{this.props.currency || 0} MJ's</p>
          {this.props.loggedIn ? (
            <p>User's Avatar here</p>
          ) : (
            <Link to="/login">
              <p className="login-link">Log In</p>
            </Link>
          )}
        </Level>
      </div>
    );
  }
}

export default TopRightNav;
