import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Models from './Models';
import Service from './Service';
import Notice from './Notice';
import Option from './Option';


const App = () => (
  <div className="app">
    <Navigation />
    <Models />
    <Service />
    <Notice />
    <Option />


  </div>
);
export default App;
