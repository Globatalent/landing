import React, { Component } from "react";
import info_1 from '../assets/img/info_1.png'
import info_2 from '../assets/img/info_2.png'
import info_3 from '../assets/img/info_3.png'

class Info extends Component {
  render() {
    return (
      <section className="section is-centered is-large is-multiline columns">
        <article className="column is-2">
          <figure class="image">
            <img src={info_1} />
          </figure>
          <h2 className="title is-3 has-text-centered">Exclusive platform</h2>
          <p className="has-text-justified">Globatalent is a unique platform that will give you a new source of extraordinary income and innovate improving your engagement with fans all over the world</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-2">
          <figure class="image">
            <img src={info_2} />
          </figure>
          <h2 className="title is-3 has-text-centered">Share the profits</h2>
          <p className="has-text-justified">Share your future profits with your fans and get future income now? Thanks to our Blockchain technology, it is possible!</p>
        </article>
        <div className="column is-1"></div>
        <article className="column is-2">
          <figure class="image">
            <img src={info_3} />
          </figure>          <h2 className="title is-3 has-text-centered">Tokenization</h2>
          <p className="has-text-justified">You can tokenize any right, from a % of the future earnings in transfers between clubs, prize money, image rights... to access to a private social community and other perks, in exchange of receiving funding today</p>
        </article>
      </section>
    )
  }
}

export default Info;