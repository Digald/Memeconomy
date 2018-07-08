import React, { Component } from "react";
import { Level } from "reactbulma";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import MJ from './mj.svg';
import "./TopRightNav.css";

/*
TopRightNav includes the very top right elements on the page. The time, number of meme jewels, and the log in button are included.
*/

class TopRightNav extends Component {
  state = {
    currentTime: Date.now()
  };

  componentWillMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ CurrentTime: Date.now() });
  }

  render() {
    return (
      <div className="TopRightNav">
        <Level mobile>
          <Moment format="h : mm A">{this.state.time}</Moment>
          <p>{this.props.currency || 0} <img className="meme-jewel-icon" src={MJ} alt="Meme Jewel Icon"/></p>
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
