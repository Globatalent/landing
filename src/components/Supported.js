import React, { Component } from "react";
import supp_1 from '../assets/img/supp_1.png'
import supp_2 from '../assets/img/supp_2.png'
import supp_3 from '../assets/img/supp_3.png'
import supp_4 from '../assets/img/supp_4.png'
import './Supported.css'

const style = {
  textColor: {
    color: '#065aa2'
  },
  lightTextColor: {
    color: '#86d0f7'
  },
  autoMargin: {
    margin: 'auto'
  }
}

class Supported extends Component {
  render() {
    return (
      <section className="section" style={{marginTop: '6rem', marginBottom: '4rem'}}>
        <header className="level" style={{marginBottom: '4rem'}}>
          <h2 className="title level-item is-4" style={style.lightTextColor}>{this.props.t('supported.header')}</h2>
        </header>
        <div className="columns is-centered has-text-centered back" style={{paddingTop: '2rem'}}>
          <div className="column is-2">
          <figure className="is-128x128 image level" style={style.autoMargin}>
              <img src={supp_1} alt="Dani Clos"/>
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold" style={style.textColor}>Dani Clos</h3>
              <h4 className="subtitle is-6" style={style.lightTextColor}>{this.props.t('supported.text_1')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={style.autoMargin}>
              <img src={supp_2} alt="NBA veteran" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold" style={style.textColor}>Maurice Evans</h3>
              <h4 className="subtitle is-6" style={style.lightTextColor}>{this.props.t('supported.text_2')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={style.autoMargin}>
              <img src={supp_3} alt="João Sousa" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold" style={style.textColor}>João Sousa</h3>
              <h4 className="subtitle is-6" style={style.lightTextColor}>{this.props.t('supported.text_3')}</h4>
            </div>
          </div>


          <div className="column is-2">
          <figure className="is-128x128 image level" style={style.autoMargin}>
              <img src={supp_4} alt="Splyce" />
            </figure>
            <div>
              <h3 className="title is-5 has-text-weight-bold" style={style.textColor}>Splyce</h3>
              <h4 className="subtitle is-6" style={style.lightTextColor}>{this.props.t('supported.text_4')}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Supported;