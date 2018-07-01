import React from "react";
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
  <div className="columns is-centered MenuIcons is-mobile">
    <IndividualIcon icon={message} alt="message bubble" name="Private Messages"/>
    <IndividualIcon icon={shopping} alt="shopping bag" name="Purchases"/>
    <IndividualIcon icon={photo} alt="photo frame" name="Collection" />
    <IndividualIcon icon={brightness} alt="brightness icon" name="TBD"/>
    <IndividualIcon icon={remote} alt="game controller" name="Account Settings"/>
    <IndividualIcon icon={onOff} alt="on/off button" name="Delete Account"/>
  </div>
);

export default MenuIcons;
