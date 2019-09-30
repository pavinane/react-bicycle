import React from 'react';
import './navigation.scss';
// import image from'./images/cyimg.jpg';
import india from './images/flag.jpeg';
import logo from './images/logo1.png';

const Images =({img1})=>(
    <div className="short">
        <img src={img1} alt=""/>
        
    </div>
);
const Navigation =()=>(
<div className="navigation">
  <div className="sub-navi">
      <div className="navi-bar">
      <div className="menu">
            <i class="fas fa-bars"></i>
            <i class="fas fa-search"></i>
      </div>
      <div className="logo">
            <Images img1={logo}/>
      </div>
      <div className="profile">
            <div className="sub-pro">
                <i class="far fa-user"></i>
                <Images img1={india}/>
                <i class="fas fa-shopping-cart"></i>
            </div>
      </div>
      </div>
  </div>
  <div className="navi-2">
      <div className="sub-navi2">
          <div className="left">
          <i class="fas fa-arrow-circle-left"></i>
          </div>
          <div className="middle">
              <div className="sub-midd">
                  <div className="sm-1">
                      <h1>GLASTONBURRY BIKE PARK</h1>
                      <span>lorem ipsum dolor sit amet,consectetur adipisicing</span>
                  </div>
                  <div className="sm-icon">
                  <i class="fas fa-sliders-h"></i>
                  <i class="fas fa-bicycle"></i>
                  <i class="fas fa-laptop"></i>
                  <i class="	fa fa-graduation-cap"></i>
                
                  </div>
                  <button type="button">book now</button>
              </div>
          </div>
          <div className="right">
          <i class="fas fa-arrow-circle-right"></i>
          </div>
      </div>
  </div>
</div>
);

export default Navigation;