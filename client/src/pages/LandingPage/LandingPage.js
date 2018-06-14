import React, { Component } from "react";
import { Container } from "reactbulma";
import "./LandingPage.css";
import TitleLogo from "../../Components/TitleLogo/TitleLogo.js";
import TopRightNav from "../../Components/TopRightNav/TopRightNav";
import PageScroll from "../../Components/PageScroll/PageScroll";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "Welcome to Memeconomy";
  }

  render() {
    return (
      <div className="page-wrapper">
        <Container fluid>
          <div className="columns">
            <div className="column">
              <TitleLogo />
            </div>
            <div className="column is-12-mobile is-4-tablet is-3-desktop is-2-fullhd">
              <TopRightNav />
            </div>
          </div>
        </Container>
        <div className="container">
          <div className="columns">
            <PageScroll />
          </div>
        </div>
        <div className="columns" />
        <div className="columns" />
      </div>
    );
  }
}

export default LandingPage;
