import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuIcons.css";
import IndividualIcon from "../IndividualIcon/IndividualIcon";
import shopping from '../IndividualIcon/shopping.svg';
import photo from '../IndividualIcon/photo.svg';
import brightness from '../IndividualIcon/brightness.svg';
import message from '../IndividualIcon/message.svg';
import onOff from '../IndividualIcon/onOff.svg';
import remote from '../IndividualIcon/remote.svg';

/*
This is the list of all menu settings (little icons) that will be displayed
below the pages component.
*/

const MenuIcons = props => (
  <div className="columns is-centered MenuIcons">
    {/* <div className="column is-3" /> */}
    <IndividualIcon icon={message} alt="message bubble" name="Private Messages"/>
    <IndividualIcon icon={shopping} alt="shopping bag" name="Purchases"/>
    <IndividualIcon icon={photo} alt="photo frame" name="Collection" />
    <IndividualIcon icon={brightness}/>
    <IndividualIcon icon={remote}/>
    <IndividualIcon icon={onOff}/>
    {/* <div className="column is-3" /> */}
  </div>
);

export default MenuIcons;
