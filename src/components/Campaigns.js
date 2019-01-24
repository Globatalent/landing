import React, { Component } from "react";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import campaign_1 from '../assets/img/campaign_1.png'
import campaign_2 from '../assets/img/campaign_2.png'
import campaign_3 from '../assets/img/campaign_3.png'

class Campaigns extends Component {
  render() {
    return (
      <section className="section">
        <header className="level">
          <h2 className="title level-item is-4">{this.props.t('campaigns.header')}</h2>
          <a className="level-item is-size-6 has-text-weight-bold has-text-grey-light is-uppercase" href="https://market.globatalent.com/campaigns" target="_blank" rel="noopener noreferrer">{this.props.t('campaigns.showMore')}</a>
        </header>
        <div className="columns is-centered">
          <article className="card column is-3 is-paddingless">
            <div className="card-image">
              <figure className="image">
                <img src={campaign_1} alt="Europa Point FC campaign" />
              </figure>
            </div>

            <div className="card-content">
              <p className="title is-5">{this.props.t('campaigns.title_1')}</p>
              <p className="subtitle is-7">{this.props.t('campaigns.text_1')}</p>
              <hr />
              <div className="content">
                <section className="columns is-vcentered">
                  <div className="column">
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.funding')}</span><span className="column">$300,000</span></p>
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.softcap')}</span><span className="column">$100,000</span></p>
                  </div>
                  <div className="is-size-7 column columns is-gapless">
                    <span className="has-text-weight-bold column">Rating </span>
                    <span className="has-text-warning column">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> {this.props.t('campaigns.startingSoon')}</span>
              </div>
            </div>

          </article>
          <div className="column is-1"></div>
          <article className="card column is-3 is-paddingless">
            <div className="card-image">
              <figure className="image">
                <img src={campaign_2} alt="Zentro Basket Madrid" />
              </figure>
            </div>

            <div className="card-content">
              <p className="title is-5">{this.props.t('campaigns.title_2')}</p>
              <p className="subtitle is-7">{this.props.t('campaigns.text_2')}</p>
              <hr />
              <div className="content">
                <section className="columns is-vcentered">
                  <div className="column">
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.funding')}</span><span className="column">$200,000</span></p>
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.softcap')}</span><span className="column">$100,000</span></p>
                  </div>
                  <div className="is-size-7 column columns is-gapless">
                    <span className="has-text-weight-bold column">Rating </span>
                    <span className="has-text-warning column">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> {this.props.t('campaigns.startingSoon')}</span>
              </div>
            </div>
          </article>
          <div className="column is-1"></div>
          <article className="card column is-3 is-paddingless">
            <div className="card-image">
              <figure className="image">
                <img src={campaign_3} alt="Future tennis champion"/>
              </figure>
            </div>

            <div className="card-content">
              <p className="title is-5">{this.props.t('campaigns.title_3')}</p>
              <p className="subtitle is-7">{this.props.t('campaigns.text_3')}</p>
              <hr />
              <div className="content">
                <section className="columns is-vcentered">
                  <div className="column">
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.funding')}</span><span className="column">$300,000</span></p>
                    <p className="is-size-7 columns is-vcentered is-gapless"><span className="has-text-weight-bold column">{this.props.t('campaigns.softcap')}</span><span className="column">$100,000</span></p>
                  </div>
                  <div className="is-size-7 column columns is-gapless">
                    <span className="has-text-weight-bold column">Rating </span>
                    <span className="has-text-warning column">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> {this.props.t('campaigns.startingSoon')}</span>
              </div>
            </div>

          </article>
        </div>

      </section>
    )
  }
}

export default Campaigns;