import React from 'react';
import './skew.scss';

// import pic from './images/no1.jpeg';


const News = ({ icon1, icon2 }) => (
  <div className="new">
    <h3>by admin</h3>
    <i className={icon1} />
    <i className={icon2} />
  </div>
);
const New2 = () => (
  <div className="new2">
    <News
      icon1="fas fa-car"
      icon2="fas fa-laptop"
    />
    <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi hic inventore ducimus nulla
              voluptatum? Harum iste temporibus sequi corrupti esse fugiat aut .

    </p>
    <button type="button">read more</button>
  </div>
);
const Skew = () => (
  <div className="news-cover">
    <div className="body">
      <div className="header">
        <h1>get the latest news</h1>
      </div>
      <div className="part">
        <div className="part-1">
          <div className="con-1">
            <div className="sub-con">
              <h1>Standard post format</h1>
              <New2 />
            </div>
          </div>
        </div>
        <div className="part-2">
          <div className="con-2">
            <div className="sub-con2">
              <div className="sub-con">
                <h1>Christmax charity race</h1>
                <New2 />
              </div>
            </div>
          </div>
        </div>
        <div className="part-3">
          <div className="con-3">
            <div className="sub-con3">
              <h1>one more post</h1>
              <New2 />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Skew;
