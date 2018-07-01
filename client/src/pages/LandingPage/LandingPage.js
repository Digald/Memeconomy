import React, { Component } from "react";
import { Container } from "reactbulma";
import "./LandingPage.css";
import TitleLogo from "../../Components/TitleLogo/TitleLogo.js";
import TopRightNav from "../../Components/TopRightNav/TopRightNav";
import PageCards from "../../Components/PageCards/PageCards";
import MenuIcons from "../../Components/MenuIcons/MenuIcons";

/*
Landing page is going to be the front of my application. The page will consist of the 
basic UI of the nintendo switch and will handle all the sites navigation through the boxes displayed 
in the middle of the screen.
*/

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
        <div className="columns">
          <PageCards />
        </div>
        <Container>
          <div className="columns">
            <div className="column">
              <MenuIcons />
            </div>
          </div>
        </Container>
        <div className="columns" />
      </div>
    );
  }
}

export default LandingPage;
