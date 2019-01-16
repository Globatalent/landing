import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import CTA from './components/CTA';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Info/>
        <CTA/>
        <Footer/>
      </div>
    );
  }
}

export default App;
