import React, { Component } from "react";
import './IndividualIcon.css';
// import shopping from './shopping.svg';

/*
This component will be the individual SVG with white
circular background.
*/

const IndividualIcon = (props) => (
    <div className="icon-display column is-1">
        <img className="icons" src={props.icon} alt={props.alt}/>
        <p className="icon-name">{props.name}</p>
    </div>
);

export default IndividualIcon;
