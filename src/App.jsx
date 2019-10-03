import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import Models from './Models';
import Service from './Service';


const App = ()=>(
  <div className="app">
    <Navigation />
    <Models/>
    <Service/>
  </div>
);
export default App;
