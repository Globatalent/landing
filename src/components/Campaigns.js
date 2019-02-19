import React, { Component } from "react";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import campaign_1 from '../assets/img/campaign_1.png'
import campaign_2 from '../assets/img/campaign_2.png'
import campaign_3 from '../assets/img/campaign_3.png'
import './Campaigns.css'


class Campaigns extends Component {
  render() {
    return (
      <section className="section">
        <header className="level">
          <h2 className="title level-item is-4">{this.props.t('campaigns.header')}</h2>
        </header>

				<div className="has-text-centered columns is-centered">
					<div className="campaign-card column is-3">
						<img src={campaign_1} class="" alt="sport campaing"/>
						<p>Muy pronto</p>
						<h3>Futuro campeón de tennis</h3>
						<p class="revenues">20% of beneficios y premios.</p>
						<ul>
							<li><span class="cube"></span>Financiación ---------- $150,000</li>
							<li><span class="cube"></span>Mínimo requerido --- $100,000</li>
							<li>
								<span class="cube"></span>
								<span class="rate-text">Rating</span>
								<div class="rate-box">
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate"></span>
									<span class="rate"></span>
								</div>
							</li>
						</ul>
						<a href="#" class="starting">
							Muy<span>pronto</span>
						</a>
						<span class="triangle"></span>
						<div class="clearer"></div>
					</div>
					<div className="column is-1"></div>
          <div className="campaign-card column is-3">
						<img src={campaign_2} class="" alt="sport campaing"/>
						<p>Muy pronto</p>
						<h3>Conoce a la emergente estrella de la WTA</h3>
						<p class="revenues">15% de los beneficios en los próximos 7 años</p>
						<ul>
							<li><span class="cube"></span>Financiación ---------- $300 000</li>
							<li><span class="cube"></span>Mínimo requerido --- $100 000</li>
							<li>
								<span class="cube"></span>
								<span class="rate-text">Rating</span>
								<div class="rate-box">
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate active"></span>
								</div>
							</li>
						</ul>
						<div class="clearer"></div>
						<a href="#" class="starting">
							Muy<span>pronto</span>
						</a>
						<span class="triangle"></span>
					</div>
          <div className="column is-1"></div>
        	<div className="campaign-card column is-3">
						<img src={campaign_3} class="" alt="sport campaing"/>
						<p>Muy pronto</p>
						<h3>Un empujón a la UEFA</h3>
						<p class="revenues">20% of beneficios y premios.</p>
						<ul>
							<li><span class="cube"></span>Financiación ---------- $150 000</li>
							<li><span class="cube"></span>Mínimo requerido --- $30 000</li>
							<li>
								<span class="cube"></span>
								<span class="rate-text">Rating</span>
								<div class="rate-box">
									<span class="rate active"></span>
									<span class="rate active"></span>
									<span class="rate"></span>
									<span class="rate"></span>
									<span class="rate"></span>
								</div>
							</li>
						</ul>
						<div class="clearer"></div>
						<a href="#" class="starting">
							Muy<span>pronto</span>
						</a>
						<span class="triangle"></span>
					</div>
				</div>
      </section>
    )
  }
}

export default Campaigns;