import React from 'react';
import './models.scss';
import image1 from './images/cyc.jpeg';
import image2 from './images/cy2.jpeg';
import image3 from './images/cym3.jpeg';
import image4 from './images/cym4.jpg';


const Icon = ({ ic }) => (
  <div className="sm-icon">
    <div className="ic">
      {ic.map((d) => (
        <div className="name">
          <i className={`fas fa-${d.name}`} />
        </div>
      ))}
    </div>
  </div>
);
const Table2 = ({ t2 }) => (
  <div className="table2">
    <h2>{t2}</h2>
  </div>
);
const Table4 = () => (
  <div className="button">
    <button type="button">rent now</button>
  </div>
);
const Table3 = () => (
  <table className="price-table">

    <tbody>
      <tr>
        <td>1 day</td>
        <td>£59/day</td>
      </tr>
      <tr>
        <td>2-6 days</td>
        <td>£49/day</td>
      </tr>
      <tr>
        <td>from 7 days</td>
        <td>£39/day</td>
      </tr>
    </tbody>
  </table>
);
const Images1 = ({ img1 }) => (
  <div className="image-block">
    <div className="img">
      <h3>fr/dh</h3>
      <img src={img1} alt="" />

      <Icon
        ic={[
          {
            name: 'sliders-h',
          },
          {
            name: 'bicycle',
          },
          {
            name: 'laptop',
          },
          {
            name: 'graduation-cap',
          },
        ]}
      />
    </div>
    <Table2
      t2="specilized demo 8"
    />
    <Table3 />
    <Table4 />

  </div>
);
const Images2 = ({ img2 }) => (
  <div className="image-block">
    <div className="img">
      <h3>fr/dh</h3>
      <img src={img2} alt="" />

      <Icon
        ic={[
          {
            name: 'sliders-h',
          },
          {
            name: 'bicycle',
          },
          {
            name: 'graduation-cap',
          },
        ]}
      />
    </div>
    <Table2
      t2="treak session 9.9"
    />
    <Table3 />
    <Table4 />
  </div>
);
const Images3 = ({ img3 }) => (
  <div className="image-block">
    <div className="img">
      <h3>fr/dh</h3>
      <img src={img3} alt="" />

      <Icon
        ic={[
          {
            name: 'sliders-h',
          },
          {
            name: 'bicycle',
          },
          {
            name: 'laptop',
          },
        ]}
      />
    </div>
    <Table2
      t2="treak session 9.9"
    />
    <Table3 />
    <Table4 />
  </div>
);
const Images4 = ({ img4 }) => (
  <div className="image-block">
    <div className="img">
      <h3>fr/dh</h3>
      <img src={img4} alt="" />

      <Icon
        ic={[
          {
            name: 'graduation-cap',
          },
          {
            name: 'bicycle',
          },
          {
            name: 'laptop',
          },
        ]}
      />
    </div>
    <Table2
      t2="treak session 9.9"
    />
    <Table3 />
    <Table4 />
  </div>
);
const Slide = () => (
  <div className="head">
    <h2>any bikes your heart desires</h2>
    <button type="button">book now</button>
  </div>
);
const Model = () => (
  <div className="models">
    <div className="box">
      <Slide />
      <div className="different">
        <div className="choose">
          <Images1 img1={image1} />
          <Images2 img2={image2} />
          <Images3 img3={image3} />
          <Images4 img4={image4} />
        </div>
      </div>
    </div>
  </div>
);
export default Model;
