import React, { Component } from "react";
import info_1 from '../assets/img/info_1.png'
import info_2 from '../assets/img/info_2.png'
import info_3 from '../assets/img/info_3.png'

class Info extends Component {
  render() {
    return (
      <section id="about" className="section is-centered is-multiline columns">
        <article className="column is-2">
          <figure className="image">
            <img src={info_1} alt="Globatalent is a unique platform that give you the chance to interact with your fans in unique ways" />
          </figure>
          <h2 className="title is-3 has-text-centered">Exclusive platform</h2>
          <p className="has-text-justified">Globatalent is a unique platform that will give you a new source of extraordinary income and innovate improving your engagement with fans all over the world</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-2">
          <figure className="image">
            <img src={info_2} alt="Globatalent enable you to share rewards in exchange of funding" />
          </figure>
          <h2 className="title is-3 has-text-centered">Share the profits</h2>
          <p className="has-text-justified">Share your future profits with your fans and get future income now? Thanks to our Blockchain technology, it is possible!</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-2">
          <figure className="image">
            <img src={info_3} alt="You can tokenize almost everything!!" />
          </figure>          <h2 className="title is-3 has-text-centered">Tokenization</h2>
          <p className="has-text-justified">You can tokenize any right, from a % of the future earnings in transfers between clubs, prize money, image rights... to access to a private social community and other perks, in exchange of receiving funding today</p>
        </article>
      </section>
    )
  }
}

export default Info;