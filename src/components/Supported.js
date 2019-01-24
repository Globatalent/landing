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
          <h2 className="title level-item is-4">{this.props.t('supported.header')}</h2>
          <a className="level-item is-size-6 has-text-weight-bold has-text-grey-light is-uppercase" href="https://web.globatalent.com" target="_blank" rel="noopener noreferrer">{this.props.t('supported.showMore')}</a>
        </header>

        <div className="columns is-centered has-text-centered">
          <div className="column is-2">
          <figure className="is-128x128 image level" style={{margin: "auto"}}>
              <img src={supp_1} alt="Dani Clos"/>
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Dani Clos</h3>
              <h4 className="subtitle is-6 has-text-grey">{this.props.t('supported.text_1')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={{margin: "auto"}}>
              <img src={supp_2} alt="NBA veteran" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Maurice Evans</h3>
              <h4 className="subtitle is-6 has-text-grey">{this.props.t('supported.text_2')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={{margin: "auto"}}>
              <img src={supp_3} alt="João Sousa" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">João Sousa</h3>
              <h4 className="subtitle is-6 has-text-grey">{this.props.t('supported.text_3')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={{margin: "auto"}}>
              <img src={supp_4} alt="Splyce" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold has-text-grey">Splyce</h3>
              <h4 className="subtitle is-6 has-text-grey">{this.props.t('supported.text_4')}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Supported;