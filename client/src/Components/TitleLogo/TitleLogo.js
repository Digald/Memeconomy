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
        <div className="main-logo-wrap level-item">
          <img className="main-logo" src={logo} alt="my logo" />
        </div>
        <h1 className="main-title level-item">Memeconomy</h1>
      </Link>
    </Level>
  </div>
);

export default TitleLogo;
