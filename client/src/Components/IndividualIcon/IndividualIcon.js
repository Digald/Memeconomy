import React, { Component } from "react";
import './IndividualIcon.css';
// import shopping from './shopping.svg';

/*
This component will be the individual SVG with white
circular background.
*/

const IndividualIcon = (props) => (
    <div className="icon-whole-display column is-1-widescreen is-2 is-12-mobile">
        <div className="icon-wrap">
            <img className="icons" src={props.icon} alt={props.alt}/>
        </div>
        <p className="icon-name">{props.name}</p>
    </div>
);

export default IndividualIcon;
