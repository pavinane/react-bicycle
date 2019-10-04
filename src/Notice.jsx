/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './notice.scss';
import image1 from './images/no1.jpeg';
// import image2 from './images/no2.jpeg';

const Change = ({ day, month }) => (
  <div change="change">
    <h1>{day}</h1>
    <p>{month}</p>
  </div>
);
const Gr1 = () => (
  <div className="gr-1">
    <img src={image1} alt="" />
    <div className="span">
      <Change
        day="12"
        month="aug"
      />
    </div>
  </div>
);
const Gr2 = ({ head, para }) => (
  <div className="gr-2">
    <h1>{head}</h1>
    <p>{para}</p>
    {/* <Change
      day="12"
      month="aug"
    /> */}
  </div>
);
const Gr3 = () => (
  <div className="gr-1">
    <img src={image1} alt="" />
    <div className="span">
      <Change
        day="23"
        month="aug"
      />
    </div>
  </div>
);
const Gr4 = ({ head, para }) => (
  <div className="gr-2">
    <h1>{head}</h1>
    <p>{para}</p>
  </div>
);
const Gr5 = ({ head, para }) => (
  <div className="gr-2">
    <h1>{head}</h1>
    <p>{para}</p>
  </div>
);
const Gr6 = () => (
  <div className="gr-6">
    <img src={image1} alt="" />
    <div className="span">
      <Change
        day="25"
        month="dec"
      />
    </div>
  </div>
);
const Gr7 = ({ head, para }) => (
  <div className="gr-2">
    <h1>{head}</h1>
    <p>{para}</p>
  </div>
);
const Gr8 = () => (
  <div className="gr-6">
    <img src={image1} alt="" />
    <div className="span">
      <Change
        day="31"
        month="jan"
      />
    </div>
  </div>
);
const Notice = () => (
  <div className="notice-board">
    <div className="box">
      <div className="title">
        <h1>don't miss the most interseting</h1>
        <span>
          <i className="fas fa-angle-left" />
          <i className="fas fa-angle-right" />
        </span>
      </div>
      <div className="template">

        <div className="grid">
          <Gr1 />
          <Gr2
            head="template author's birthday"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos, molestias eveniet quas blanditiis provident aut"
          />
          <Gr3 />
          <Gr4 />
          <Gr5
            head="christmas charity race"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos, molestias eveniet quas blanditiis provident aut"
          />
          <Gr6 />
          <Gr7
            head="eurobike 2016 exhibition"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos, molestias eveniet quas blanditiis provident aut"
          />
          <Gr8 />
        </div>
      </div>
    </div>
  </div>
);
export default Notice;
