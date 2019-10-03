import React from 'react';
import './service.scss';


const Icon = ({ ic }) => (
  <div className="sm-icon">
    {ic.map((d) => (
      <div className="name">
        <i className={`fas fa-${d.name}`} />

      </div>
    ))}
  </div>


);
const Service = () => (
  <div className="service">
    <div className="riding">
      <div className="title">
        <h1>take a maximum of riding with our service</h1>
      </div>
      <div className="differ">
        <div className="bikes">
          <div className="recreation">
            <Icon
              ic={[
                {
                  name: 'bicycle',
                },
                {
                  name: 'fab fa-car',
                },
              ]}
            />
            <div className="in-box1">
              <h2>recreation or hard riding</h2>
              <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa libero accusantium tempora
                magni expedita praesentium harum? Commodi aliquam exercitationem eum accusantium,
                {' '}

              </p>
            </div>
          </div>
          <div className="personally">
            <Icon
              ic={[
                {
                  name: 'laptop',
                },
                {
                  name: 'sliders-h',
                },
              ]}
            />
            <div className="in-box2">
              <h1>personally turned bikes</h1>
              <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa libero accusantium tempora
                magni expedita praesentium harum? Commodi aliquam exercitationem eum accusantium,
                {' '}

              </p>
            </div>
          </div>
          <div className="wide-range">
            <Icon
              ic={[
                {
                  name: 'sliders-h',
                },
                {
                  name: 'graduation-cap',
                },
                {
                  name: 'cog',
                },
                {
                  name: 'tv',
                },
              ]}
            />
            <div className="in-box3">
              <h1>wide range of accessories</h1>
              <p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error culpa libero accusantium tempora
                magni expedita praesentium harum? Commodi aliquam exercitationem eum accusantium,
                {' '}

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Service;
