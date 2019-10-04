import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Models from './Models';
import Service from './Service';
import Notice from './Notice';


const App = () => (
  <div className="app">
    <Navigation />
    <Models />
    <Service />
    <Notice />
  </div>
);
export default App;
