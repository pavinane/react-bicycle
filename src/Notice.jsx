/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './notice.scss';
// import image1 from './images/no1.jpeg';
// import image2 from './images/no3.jpeg';

const Change = ({ day, month }) => (
  <div change="change">
    <h1>{day}</h1>
    <p>{month}</p>
  </div>
);
const Gr1 = () => (
  <div className="gr-1">
    {/* <img src={image1} alt="" /> */}
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

  </div>
);
const Gr3 = () => (
  <div className="gr-3">
    {/* <img src={image1} alt="" /> */}
    <div className="span">
      <Change
        day="23"
        month="aug"
      />
    </div>
  </div>
);
const Gr4 = ({ sym }) => (
  <div className="gr-4">
    {sym.map((ic) => (
      <div className="name">
        <h3>
          <i className={`fas fa-${ic.icon}`} />
          {ic.name}
        </h3>
      </div>
    ))}
    <button type="button"> learn more</button>
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
    {/* <img src={image2} alt="" /> */}
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
  <div className="gr-8">
    {/* <img src={image1} alt="" /> */}
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
          <Gr4
            sym={[
              {
                icon: 'map-marker-alt', name: 'bristrol,uk',

              },
              {
                icon: 'far fa-calendar', name: 'aug 23 - aug 28',
              },
              {
                icon: 'clock', name: '12:00 pm - 22:00 pm',
              },
            ]}
          />
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
