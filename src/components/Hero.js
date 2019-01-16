import React, { Component } from 'react';
import hero from '../assets/img/hero.png'

class Hero extends Component {
  render() {
    return (
      <section className="hero is-fullheight" style={{
        backgroundImage: "url(" + hero + ")",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#999'
    }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white">
              Tokenizing Sporting Talent
      </h1>
            <h2 className="subtitle has-text-white">
              Sport revolution is here. <br/>
              Join now to achieve extraordinaire earnings tokenizing future income of your favorite club or athlete!
      </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;