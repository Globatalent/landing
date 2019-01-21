import React, { Component } from "react";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import card_1 from '../assets/img/card_1.png'
import card_2 from '../assets/img/card_2.png'
import card_3 from '../assets/img/card_3.png'

class Campaigns extends Component {
  render() {
    return (
      <section className="section">
        <header className="level">
          <h2 className="title level-item is-4">Active Campaigns:</h2>
          <a className="level-item is-size-6 has-text-weight-bold has-text-grey-light is-uppercase" href="https://market.globatalent.com/campaigns" target="_blank" rel="noopener noreferrer">Show more</a>
        </header>
        <div className="columns is-centered">
          <article className="card column is-3 is-paddingless">
            <div className="card-image">
              <figure className="image">
                <img src={card_1} alt="Europa Point FC campaign" />
              </figure>
            </div>

            <div className="card-content">
                  <p className="title is-5">Join Europa Point FC to UEFA</p>
                  <p className="subtitle is-7">20% of UEFA and transfer rights revenues for the next 3 years</p>
              <hr />
              <div className="content">
                <section className="columns">
                  <div className="column">
                    <p className="is-size-7"><span className="has-text-weight-bold">Funding</span> $300,000</p>
                    <p className="is-size-7"><span className="has-text-weight-bold">Soft Cap</span>$100,000</p>
                  </div>
                  <div className="is-size-7 column has-text-warning">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> Starting soon</span>
              </div>
            </div>

          </article>
          <div className="column is-1"></div>
          <article className="card column is-3 is-paddingless">

            <div className="card-image">
              <figure className="image">
                <img src={card_2} alt="Zentro Basket Madrid campaign" />
              </figure>
            </div>

            <div className="card-content">
                  <p className="title is-5">Invest in Zentro Basket Madrid - Club & Academy</p>
                  <p className="subtitle is-7">Interesting (TBD) percentage of academy revenue.</p>
              <hr />
              <div className="content">
                <section className="columns">
                  <div className="column">
                    <p className="is-size-7"><span className="has-text-weight-bold">Funding</span> $200,000 </p>
                    <p className="is-size-7"><span className="has-text-weight-bold">Soft Cap</span> $100,000</p>
                  </div>
                  <div className="is-size-7 column has-text-warning">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> Starting soon</span>
              </div>
            </div>

          </article>
          <div className="column is-1"></div>
          <article className="card column is-3 is-paddingless">

            <div className="card-image">
              <figure className="image">
                <img src={card_3} alt="Promising tennis star" />
              </figure>
            </div>

            <div className="card-content">
                  <p className="title is-5">Coming Soon - Future tennis champion</p>
                  <p className="subtitle is-7">15% of prizes during 10 years</p>
              <hr />
              <div className="content">
                <section className="columns">
                  <div className="column">
                    <p className="is-size-7"><span className="has-text-weight-bold">Funding</span> $300,000</p>
                    <p className="is-size-7"><span className="has-text-weight-bold">Soft Cap</span> $100,000</p>
                  </div>
                  <div className="is-size-7 column has-text-warning">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </section>
                <hr />
                <span className="is-size-7 has-text-weight-bold has-text-grey-light is-uppercase"><FontAwesomeIcon icon={faClock} /> Starting soon</span>
              </div>
            </div>

          </article>
        </div>

      </section>
    )
  }
}

export default Campaigns;