import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { unhighlightPage } from "./actions";
import "./IndividualIcon.css";

/*
This component will be the individual SVG with white
circular background.
*/

class IndividualIcon extends Component {
  state = {
    isHovered: false
  };

  handleHover() {
    if (!this.state.isHovered) {
      this.props.unhighlightPage();
      this.setState({ isHovered: true });
    }
  }

  handleOffHover() {
    if (this.state.isHovered) {
      this.setState({ isHovered: false });
    }
  }

  render() {
    return (
      <div className="icon-whole-display column">
        <Link to="/">
          <div
            className={
              this.state.isHovered ? "icon-wrap icon-wrap-hover" : "icon-wrap"
            }
            onMouseEnter={() => this.handleHover()}
            onPointerOver={() => this.handleHover()}
            onMouseLeave={() => this.handleOffHover()}
            onPointerOut={() => this.handleOffHover()}
          >
            <img className="icons" src={this.props.icon} alt={this.props.alt} />
          </div>
        </Link>
        {this.state.isHovered ? (
          <p className="icon-name">{this.props.name}</p>
        ) : (
          <p className="icon-name" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ unhighlightPage }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualIcon);
