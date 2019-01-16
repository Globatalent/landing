import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar is-transparent is-fixed-top" style={{backgroundColor: 'transparent', backgroundImage: 'none'}}>
          <div className="navbar-brand">
            <a className="navbar-item" href="https://globatalent.com">
              <img src="" alt="Globatalent: The first sports crypto exchange where you can trade and support your favorite clubs and sports idols" />
            </a>
            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurguer">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarBurguer" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item has-text-white" href="">
                About
                </a>
              <a className="navbar-item has-text-white" href="">
                Contact
                </a>
            </div>
          </div>
        </nav>

      </header>
    )
  }
}

export default Header;