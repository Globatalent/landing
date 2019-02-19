import React, { Component } from "react";
import logo from '../assets/img/logo--blue.png';
import { faTwitter, faFacebook, faTelegram, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  footerStyle: {
    backgroundColor: '#86d0f7',
    color: '#065aa2'
  },
  textColor: {
    color: '#065aa2'
  },
  regularFont: {
    fontStyle: 'normal'
  }

}

class Footer extends Component {

  render() {
    return (
      <footer className="footer" style={style.footerStyle}>
        <div className="columns level">
          <section className="column level-item is-1">
            <figure className="image level-item is-centered">
              <a href="https://globatalent.com"><img src={logo} alt="Globatalent logo" /></a>
            </figure>
          </section>
          <article className="column level-item">
            <h3 className="title is-5 has-text-weight-bold" style={style.textColor}>{this.props.t('site.about.title')}</h3>
            <p>{this.props.t('site.about.text')}</p>
          </article>
          <section className="column level-item">
            <h3 className="title is-5" style={style.textColor}>{this.props.t('site.locations.title')}</h3>
            <address style={style.regularFont}>
              {this.props.t('site.locations.location_1.city')} <span className="is-size-7">{this.props.t('site.locations.location_1.direction')}</span><br />
              {this.props.t('site.locations.location_2.city')} <span className="is-size-7">{this.props.t('site.locations.location_2.direction')}</span><br />
              {this.props.t('site.locations.location_3.city')} <span className="is-size-7">{this.props.t('site.locations.location_3.direction')}</span>
            </address>
          </section>
        </div>
        <section style={{display: 'flex', justifyContent: 'center'}}>
          <h3 className="title is-5 is-marginless has-text-weight-bold" style={style.textColor}>{this.props.t('site.joinSocial')}</h3>
          <ul className="is-flex is-size-4" style={{marginLeft:'1rem'}}>
            <li><a href="https://www.facebook.com/globatalent.official" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/globatalent" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/globatalent/" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://t.me/globatalent/" className="icon "><FontAwesomeIcon icon={faTelegram} /></a></li>
            <li><a href="https://linkedin.com/company/globatalent" className="icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
          <br />
        </section>
        <section className="has-text-centered">
          <small className="has-text-weight-bold">&copy; {(new Date().getFullYear())} Globatalent</small>
        </section>
      </footer>
    )
  }
}

export default Footer;