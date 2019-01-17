import React, { Component } from "react";
import supp_1 from '../assets/img/supp_1.png'
import supp_2 from '../assets/img/supp_2.png'
import supp_3 from '../assets/img/supp_3.png'
import supp_4 from '../assets/img/supp_4.png'

class Supported extends Component {
  render() {
    return (
      <section className="section" style={{ backgroundColor: "#f7faff" }}>
        <header className="level">
          <h2 className="title level-item is-3">Globatalent is supported by:</h2>
          <a className="level-item is-size-6 has-text-weight-bold has-text-grey-light is-uppercase" href="https://web.globatalent.com" target="_blank" rel="noopener noreferrer">Show more</a>
        </header>

        <div className="level columns has-text-centered">
        <div className="column is-1"></div>
          <div className="column is-2">
          <figure className="image level">
              <img src={supp_1} alt="Dani Clos"/>
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Dani Clos</h3>
              <h4 className="subtitle has-text-grey">Formula 1&reg;</h4>
            </div>
          </div>

          <div className="column is-2">
          <figure className="image level">
              <img src={supp_2} alt="NBA veteran" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Maurice Evans</h3>
              <h4 className="subtitle has-text-grey">NBA veteran</h4>
            </div>
          </div>

          <div className="column is-2">
          <figure className="image level">
              <img src={supp_3} alt="João Sousa" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">João Sousa</h3>
              <h4 className="subtitle has-text-grey">Tennis player</h4>
            </div>
          </div>

          <div className="column is-2">
          <figure className="image level">
              <img src={supp_4} alt="Splyce" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Splyce</h3>
              <h4 className="subtitle has-text-grey">e-Sports team</h4>
            </div>
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
    )
  }
}

export default Supported;