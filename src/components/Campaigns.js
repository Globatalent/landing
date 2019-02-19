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
      <section className="section is-paddingless campaigns">
        <header className="level">
          <h2 className="title level-item is-4"><span>{this.props.t('campaigns.header')}</span></h2>
        </header>

				<div className="has-text-centered columns is-centered">
					<div className="campaign-card column is-3">
						<img src={campaign_1} class="" alt="sport campaing" />
						<p>{this.props.t('campaigns.startingSoon')}</p>
						<h3>{this.props.t('campaigns.title_3')}</h3>
						<p class="revenues">{this.props.t('campaigns.text_3')}</p>
						<ul>
							<li><span class="cube"></span>{this.props.t('campaigns.funding')} --- $150,000</li>
							<li><span class="cube"></span>{this.props.t('campaigns.softcap')} --- $100,000</li>
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
							{this.props.t('campaigns.startingSoon')}
						</a>
						<span class="triangle"></span>
						<div class="clearer"></div>
					</div>
					<div className="column is-1"></div>
          <div className="campaign-card column is-3">
						<img src={campaign_2} class="" alt="sport campaing" />
						<p>{this.props.t('campaigns.startingSoon')}</p>
						<h3>{this.props.t('campaigns.title_2')}</h3>
						<p class="revenues">{this.props.t('campaigns.text_2')}</p>
						<ul>
							<li><span class="cube"></span>{this.props.t('campaigns.funding')} --- $300 000</li>
							<li><span class="cube"></span>{this.props.t('campaigns.softcap')} --- $100 000</li>
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
							{this.props.t('campaigns.startingSoon')}
						</a>
						<span class="triangle"></span>
					</div>
					<div className="column is-1"></div>
        	<div className="campaign-card column is-3">
						<img src={campaign_3} class="" alt="sport campaing" />
						<p>{this.props.t('campaigns.startingSoon')}</p>
						<h3>{this.props.t('campaigns.title_1')}</h3>
						<p class="revenues">{this.props.t('campaigns.text_1')}</p>
						<ul>
							<li><span class="cube"></span>{this.props.t('campaigns.funding')} --- $300 000</li>
							<li><span class="cube"></span>{this.props.t('campaigns.softcap')} --- $100 000</li>
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
							{this.props.t('campaigns.startingSoon')}
						</a>
						<span class="triangle"></span>
					</div>
				</div>
      </section>
    )
  }
}

export default Campaigns;