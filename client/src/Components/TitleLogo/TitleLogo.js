import React from "react";
import { Link } from "react-router-dom";
import { Level } from "reactbulma";
import logo from "./white_logo.svg";
import "./TitleLogo.css";

/*
TitleLogo is the top left of the page which includes the logo for the site and the site title
*/

const TitleLogo = () => (
  <div className="TitleLogo">
    <Level>
      <Link className="level" to="/">
        <div className="TitleLogo__logoWrap level-item">
          <img className="TitleLogo__logoWrap__mainLogo" src={logo} alt="Memeconomy's Logo" />
        </div>
        <h1 className="TitleLogo__mainTitle level-item">Memeconomy</h1>
      </Link>
    </Level>
  </div>
);

export default TitleLogo;
