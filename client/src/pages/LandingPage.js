import React from "react";
import { Container } from "reactbulma";
import './LandingPage.css';
import TitleLogo from "../Components/TitleLogo/TitleLogo.js";

const LandingPage = () => (
  <div className="page-wrapper">
    <Container fluid>
      <TitleLogo />
    </Container>
  </div>
);

export default LandingPage;
