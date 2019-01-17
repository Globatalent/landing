import React, { Component } from "react";
import logo from '../assets/img/logo.png';
import { faTwitter, faFacebook, faTelegram, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer className="footer has-text-white columns ">
        <div className="column is-1"></div>
        <section className="column level is-2">
          <figure className="image is-128x128 level-item is-centered">
            <a href="https://globatalent.com"><img src={logo} alt="Globatalent logo" /></a>
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
            <li><a href="https://www.facebook.com/globatalent.official" className="icon has-text-white"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/globatalent" className="icon has-text-white"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/globatalent/" className="icon has-text-white"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://t.me/globatalent/" className="icon has-text-white"><FontAwesomeIcon icon={faTelegram} /></a></li>
            <li><a href="https://linkedin.com/company/globatalent" className="icon has-text-white"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
          <br/>
          <small>&copy; {(new Date().getFullYear())} Globatalent, All rights reserved</small>
        </section>
      </footer>
    )
  }
}

export default Footer;