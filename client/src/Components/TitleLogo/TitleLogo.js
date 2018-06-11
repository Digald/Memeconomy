import React from "react";
import logo from './logo.png';
import './TitleLogo.css'

const TitleLogo = () => (
    <div className="title-logo">
        <img className="main-logo" src={logo} alt="my logo"/>
        <h1 className="main-title">Memeconomy</h1>
    </div>
);

export default TitleLogo;