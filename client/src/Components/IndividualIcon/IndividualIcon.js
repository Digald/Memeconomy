import React, { Component } from "react";
import './IndividualIcon.css';

/*
This component will be the individual SVG with white
circular background.
*/

const IndividualIcon = (props) => (
    <div className="column is-1">
        <img src={props.icon1} alt={props.alt}/>
    </div>
);

export default IndividualIcon;
