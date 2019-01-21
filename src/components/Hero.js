import React, { Component } from 'react';
import hero from '../assets/img/hero.png';
import logo from '../assets/img/logo.png';


class Hero extends Component {
  render() {
    return (
      <section className="hero is-medium"  style={{
        backgroundImage: " linear-gradient( rgba(51,89,160,0.3),  rgba(51,89,160,0.5)) ,url(" + hero + ")",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
        <header className="hero-head">
        <nav className="navbar is-transparent level" style={{backgroundColor: 'transparent',  textShadow: "1px 1px 1px black"}}>
          <div className="navbar-brand level-item">
            <a className="navbar-item" href="https://globatalent.com">
              <img src={logo} style={{filter: 'drop-shadow(0px 0px 1px black)'}} alt="Globatalent: The first sports crypto exchange where you can trade and support your favorite clubs and sports idols" />
            </a>
            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurguer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          <div className="level-item"></div>
          <div id="navbarBurguer" className="navbar-menu level-item">
              <a className="navbar-item has-text-white" href="#about">
                About
                </a>
              <a className="navbar-item has-text-white" href="#contact">
                Contact
                </a>
          </div>
        </nav>

      </header>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white">
              Tokenizing Sporting Talent
      </h1>
            <h2 className="subtitle has-text-white">
              Sport revolution is here.<br/>
              Join now to achieve extraordinaire earnings tokenizing future income of your favorite club or athlete!
      </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;