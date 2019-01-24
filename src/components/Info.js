import React, { Component } from "react";
import img_1 from '../assets/img/img_1.png'
import img_2 from '../assets/img/img_2.png'
import img_3 from '../assets/img/img_3.png'

class Info extends Component {
  render() {
    return (
      <section id="about" className="section is-centered columns" style={{paddingTop: "1.5rem"}}>
        <article className="column is-3">
          <figure className="image is-128x128" style={{margin: "auto"}}>
            <img src={img_1} alt="Globatalent is a unique platform that give you the chance to interact with your fans in unique ways" />
          </figure>
          <h2 className="title is-4 has-text-centered" style={{marginBottom: "1rem"}}>{this.props.t('info.title_1')}</h2>
          <p className="has-text-justified">{this.props.t('info.text_1')}</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-3">
          <figure className="image is-128x128" style={{margin: "auto"}}>
            <img src={img_2} alt="Globatalent enable you to share rewards in exchange of funding" />
          </figure>
          <h2 className="title is-4 has-text-centered" style={{marginBottom: "1rem"}}>{this.props.t('info.title_2')}</h2>
          <p className="has-text-justified">{this.props.t('info.text_2')}</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-3">
          <figure className="image is-128x128" style={{margin: "auto"}}>
            <img src={img_3} alt="You can tokenize almost everything!!" />
          </figure>
          <h2 className="title is-4 has-text-centered" style={{marginBottom: "1rem"}}>{this.props.t('info.title_3')}</h2>
          <p className="has-text-justified">{this.props.t('info.text_3')}</p>
        </article>
      </section>
    )
  }
}

export default Info;