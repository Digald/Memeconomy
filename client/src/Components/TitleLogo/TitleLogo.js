import React from "react";
import { Link } from "react-router-dom";
import { Level } from "reactbulma";
import logo from "./logo.png";
import "./TitleLogo.css";

const TitleLogo = () => (
  <div className="TitleLogo">
    <Level>
      <Link to="/">
        <img className="main-logo" src={logo} alt="my logo" />
        <h1 className="main-title">Memeconomy</h1>
      </Link>
    </Level>
  </div>
);

export default TitleLogo;
