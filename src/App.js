import React, { Component } from 'react';
import Hero from './components/Hero';
import Info from './components/Info';
import CTA from './components/CTA';
import Campaigns from './components/Campaigns';
import Supported from './components/Supported';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <Info/>
        <CTA/>
        <Campaigns/>
        <Supported/>
        <Footer/>
      </div>
    );
  }
}

export default App;
