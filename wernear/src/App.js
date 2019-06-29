import React from 'react';
import Profile from './components/profilepic'
import Map from './components/map'
import Overlay from './components/overlay'
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Map/>
      <Overlay/>
    </div>
  );
}

export default App;
