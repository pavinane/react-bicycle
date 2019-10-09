import React from 'react';
import './option.scss';
// import gif from './images/op2.gif';

const Option = () => (
  <div className="option">
    <div className="slide">
      <div className="head">
        <h1>
rent a bike from
          {' '}
          <b>anywhere</b>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellendus assumenda
           quae hic officiisreprehenderit fugit totam ducimus. Voluptas nisi dolorem aliquam,
        </p>
        <button type="button">learn more</button>

      </div>

    </div>
    <div className="end">
      <div className="user">
        <div className="icon">
          <div className="apple">
            <i className="fab fa-apple" />
            <h2>iphone store</h2>
          </div>
          <div className="android">
            <i className="fab fa-google-play" />
            <h2>google play</h2>
          </div>
          <div className="window">
            <i className="fab fa-windows" />
            <h2>window store</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Option;
