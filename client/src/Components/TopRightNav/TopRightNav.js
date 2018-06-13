import React, { Component } from "react";
import { Level } from "reactbulma";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tick } from "./actions";
import Moment from "react-moment";
import "./TopRightNav.css";

class TopRightNav extends Component {

  componentWillMount() {
    setInterval(() => this.props.tick(), 1000);
  }

  render() {
    return (
      <div className="TopRightNav">
        <Level>
          <Moment format="h : mm ss A">{this.props.time}</Moment>
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

const mapStateToProps = state => ({
  time: state.currentTime.currentTime
});

const mapDispatchToProps = dispatch => bindActionCreators({ tick }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRightNav);
