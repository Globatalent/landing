import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <section className="section is-centered is-multiline columns">
        <article className="column is-3">
          <img src="" className="is-rounded is-centered" />
          <h2 className="title is-3 has-text-centered">Exclusive platform</h2>
          <p>Globatalent is a unique platform that will give you a new source of extraordinary income and innovate improving your engagement with fans all over the world</p>
        </article>
        <article className="column is-3">
          <img src="" className="is-rounded is-centered" />
          <h2 className="title is-3 has-text-centered">Share the profits</h2>
          <p></p>
        </article>
        <article className="column is-3">
          <img src="" className="is-rounded is-centered" />
          <h2 className="title is-3 has-text-centered">Tokenization</h2>
          <p>You can tokenize any right, from a % of the future earnings in transfers between clubs, prize money, image rights... to access to a private social community and other perks, in exchange of receiving funding today</p>
        </article>
      </section>
    )
  }
}

export default Info;