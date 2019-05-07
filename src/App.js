import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Hero from './components/Hero';
import Info from './components/Info';
import CTA from './components/CTA';
import Campaigns from './components/Campaigns';
import Supported from './components/Supported';
import Footer from './components/Footer';
import './i18n';

class App extends Component {
  render() {
    // console.log(this.props.lng.includes('es') ? 'Spanish' : 'English')
    return (
      <div>
        <Hero t={this.props.t}/>
        <Info t={this.props.t}/>
        <CTA t={this.props.t} lng={this.props.lng} />
        <Campaigns t={this.props.t}/>
        <Supported t={this.props.t}/>
        <Footer t={this.props.t}/>
      </div>
    );
  }
}

export default withNamespaces()(App);
