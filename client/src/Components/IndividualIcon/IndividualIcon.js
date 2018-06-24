import React, { Component } from "react";
import './IndividualIcon.css';
// import shopping from './shopping.svg';

/*
This component will be the individual SVG with white
circular background.
*/

const IndividualIcon = (props) => (
    <div className="column is-1">
        <img src={props.icon} alt={props.alt}/>
        <p>{props.name}</p>
    </div>
);

export default IndividualIcon;
