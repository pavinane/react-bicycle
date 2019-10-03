import React from 'react';
import './navigation.scss';
// import image from'./images/cyimg.jpg';
import india from './images/flag.jpeg';
import logo from './images/logo1.png';

const Images = ({ img1 }) => (
  <div className="short">
    <img src={img1} alt="" />

  </div>
);

const Menu = () => (
  <div className="menu">
    <i className="fas fa-bars" />
    <i className="fas fa-search" />
  </div>
);
const Profile = () => (
  <div className="profile">
    <div className="sub-pro">
      <i className="far fa-user" />
      <Images img1={india} />
      <i className="fas fa-shopping-cart" />
    </div>
  </div>
);
const Icon = () => (
  <div className="sm-icon">
    <i className="fas fa-sliders-h" />
    <i className="fas fa-bicycle" />
    <i className="fas fa-laptop" />
    <i className="fa fa-graduation-cap" />
  </div>
);
const Navigation = () => (
  <div className="navigation">
    <div className="sub-navi">
      <div className="navi-bar">
        <Menu />
        <div className="logo">
          <Images img1={logo} />
        </div>
        <Profile />
      </div>
    </div>
    <div className="navi-2">
      <div className="sub-navi2">
        <div className="left">
          <i className="fas fa-arrow-circle-left" />
        </div>
        <div className="middle">
          <div className="sub-midd">
            <div className="sm-1">
              <h1>GLASTONBURRY BIKE PARK</h1>
              <span>lorem ipsum dolor sit amet,consectetur adipisicing</span>
            </div>
            <Icon />
            <button type="button">book now</button>
          </div>
        </div>
        <div className="right">
          <i className="fas fa-arrow-circle-right" />
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
