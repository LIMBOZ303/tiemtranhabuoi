import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="banner"><Banner /></div>
      <div id="about"><About /></div>
      <div id="gallery"><Gallery /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App; 