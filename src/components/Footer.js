import React, { Component } from "react";
import logo from '../assets/img/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer has-text-white columns">
        <section className="column">
        <figure className="image is-128x128">
           <a href="https://globatalent.com"><img src={logo} /></a>
          </figure>
      </section>
        <article className="column">
          <h3 className="title is-6 has-text-white">About</h3>
          <p>
            Globatalent is the the first sports crypto exchange where you can tokenize, trade and support your favorite clubs and sports idols.
        </p>
        </article>
        <section className="column">
          <h3 className="title is-6 has-text-white">Locations</h3>
          <address>
            London <br />
            Buenos Aires <br />
            1/F Knowles Building, HKU, Pokfulam Road, Hong Kong
      </address>
        </section>
        <section className="column">
        <h3 className="title is-6 has-text-white">Join our conversations</h3>
        <ul className="is-flex">
        <li><a href="https://www.facebook.com/globatalent.official" className="icon"></a></li>
          <li><a href="https://twitter.com/globatalent" className="icon"></a></li>
          <li><a href="https://www.instagram.com/globatalent/" className="icon"></a></li>
          <li><a href="https://t.me/globatalent/" className="icon"></a></li>
          <li><a href="https://linkedin.com/company/globatalent" className="icon"></a></li>
        </ul>
        <small>&copy; {(new Date().getFullYear())} Globatalent, All rights reserved</small>
        </section>
      </footer>
    )
  }
}

export default Footer;