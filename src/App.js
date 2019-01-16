import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Footer/>
      </div>
    );
  }
}

export default App;
