import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Models from './Models';
import Service from './Service';
import Notice from './Notice';
import Option from './Option';
import Skew from './Skew';

const App = () => (
  <div className="app">
    <Navigation />
    <Models />
    <Service />
    <Notice />
    <Option />
    <Skew />

  </div>
);
export default App;
