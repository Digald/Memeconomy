import React, { Component } from "react";
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
      this.setState({ isHovered: true });
    }
  }

  render() {
    return (
      <div className="icon-whole-display column">
        <div
          className={this.state.isHovered ? "icon-wrap icon-wrap-hover" : "icon-wrap"}
          onMouseOver={() => this.handleHover()}
          onPointerOver={() => this.handleHover()}
        >
          <img className="icons" src={this.props.icon} alt={this.props.alt} />
        </div>
        <p className="icon-name">{this.props.name}</p>
      </div>
    );
  }
}

export default IndividualIcon;
