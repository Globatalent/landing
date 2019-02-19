import React, { Component } from 'react';
import hero from '../assets/img/hero.png';
import logo from '../assets/img/logo--white.png';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-medium" style={{
        backgroundImage: " linear-gradient( rgba(0,0,0,0.3),  rgba(0,0,0,0.2)) ,url(" + hero + ")",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <header className="hero-head">
          <nav className="navbar is-transparent level" style={{ backgroundColor: 'transparent', textShadow: "1px 1px 1px black" }}>
            <div className="navbar-brand level-item">
              <a className="navbar-item" href="https://globatalent.com">
                <img src={logo} style={{ filter: 'drop-shadow(0px 0px 1px black)', maxHeight: '2.5rem' }} alt="Globatalent: The first sports crypto exchange where you can trade and support your favorite clubs and sports idols" />
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
              <span class="cube"></span> {this.props.t('site.nav.url_1')}
              </a>
              <a className="navbar-item has-text-white" href="#contact">
              <span class="cube"></span> {this.props.t('site.nav.url_2')}
              </a>
            </div>
          </nav>

        </header>
        <div className="hero-body columns">
        <div className="column is-1"></div>
          <div className="container column is-4">
            <h1 className="title has-text-white is-1">
              {this.props.t('site.title')}
            </h1>
            <h2 className="subtitle has-text-white">
              {this.props.t("site.subtitle_1")}
              <br />
              {this.props.t("site.subtitle_2")}
            </h2>
          </div>
          <div className="column"></div>
        </div>
      </section>
    )
  }
}

export default Hero;