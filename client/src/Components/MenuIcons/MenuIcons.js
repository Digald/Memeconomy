import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuIcons.css";
import IndividualIcon from "../IndividualIcon/IndividualIcon";
import shopping from '../IndividualIcon/shopping.svg';

/*
This is the list of all menu settings that will be displayed
below the pages component.
*/

const MenuIcons = props => (
  <div className="columns MenuIcons">
    <div className="column is-3" />
    <IndividualIcon icon={shopping} alt="shopping not working" name="shopping bag"/>
    <IndividualIcon />
    <IndividualIcon />
    <IndividualIcon />
    <IndividualIcon />
    <IndividualIcon />
    <div className="column is-3" />
  </div>
);

export default MenuIcons;
