import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./TitleLogo.css";

const TitleLogo = () => (
  <div className="TitleLogo">
    <Link to="/">
      <img className="main-logo" src={logo} alt="my logo" />
      <h1 className="main-title">Memeconomy</h1>
    </Link>
  </div>
);

export default TitleLogo;
