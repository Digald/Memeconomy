import React, { Component } from "react";
import { Container } from "reactbulma";
import "./LandingPage.css";
import TitleLogo from "../../Components/TitleLogo/TitleLogo.js";
import TopRightNav from "../../Components/TopRightNav/TopRightNav";

class LandingPage extends Component {
  
  componentDidMount() {
    document.title = 'Welcome to Memeconomy';
  }

  render() {
    return (
      <div className="page-wrapper">
        <Container fluid>
          <div className="columns">
            <div className="column">
              <TitleLogo />
            </div>
            <div className="column is-2">
              <TopRightNav />
            </div>
          </div>
          <div className="columns" />
          <div className="columns" />
          <div className="columns" />
        </Container>
      </div>
    );
  }
}

export default LandingPage;
