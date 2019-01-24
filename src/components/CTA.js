import React, { Component } from "react";
import cta from '../assets/img/cta.png'

class CTA extends Component {
  render() {
    return (
      <section id="contact" className="section columns is-medium is-vcentered is-paddingless" style={{ backgroundColor: "#f7faff" }}>
        <div className="image is-half column is-paddingless">
        <figure className="image">
          <img src={cta} alt="" />
        </figure>
        </div>
        <div className="column is-1"></div>

        <form className="column is-4" action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3718183000000277001' method='POST'>
          <h2 className="title is-4">{this.props.t('form.title')}</h2>
          <p className="title is-6">{this.props.t('form.subtitle_1')}<br/>{this.props.t('form.subtitle_2')}</p>
          <input type='hidden' name='xnQsjsdp' value='26ded01eee3cbb74693abaeee34e2f8acbb50ca314ea68813ba8b57665b4dc48' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='hidden' name='xmIwtLD' value='902ae1508809b664f4a8880feb7226435ad252e90c524204e2b557a276287e3b' />
          <input type='hidden' name='actionType' value='TGVhZHM=' />
          <input type='hidden' name='returnURL' value='https://landing.globatalent.com/b2bthanks' />
          <input type='hidden' name='LEADCF1' value='B2B' />

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_1')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input" required type="text" placeholder="First name (Required)" maxLength='40' name='First Name' />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input className="input" required type="text" placeholder="Last name (Required)" maxLength='80' name='Last Name' />
              </div>
            </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_2')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
            <div className="field">
              <div className="control">
              <input className="input" required type="email" maxLength='100' name='Email' placeholder="Email (Required)" />
              </div>
            </div>

            <div className="field">
              <div className="control">
              <input className="input" type="tel" placeholder="Phone (Optional)" maxLength='30' name='Phone' />
              </div>
            </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_3')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
            <div className="field">
              <div className="control">
              <input className="input" required type="text" placeholder="Club or athlete name (Required)" maxLength='100' name='Company' />
              </div>
            </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_5')}</label>
            </div>
            <div className="field-body">
            <div className="field">
              <div className="control">
              <div className="select is-fullwidth">
                <select name='Lead Source'>
                  <option value='-None-'>-None-</option>
                  <option value='Advertisement'>Advertisement</option>
                  <option value='Affiliate&#x20;Partner'>Affiliate Partner</option>
                  <option value='Chat'>Chat</option>
                  <option value='Cold&#x20;Call'>Cold Call</option>
                  <option value='Employee&#x20;Referral'>Employee Referral</option>
                  <option value='External&#x20;Referral'>External Referral</option>
                  <option value='GBT&#x20;Web&#x20;site'>GBT Web site</option>
                  <option value='Seminar&#x20;Partner'>Seminar Partner</option>
                  <option value='Trade&#x20;Show'>Trade Show</option>
                  <option value='Web&#x20;Download'>Web Download</option>
                  <option value='Ferran'>Ferran</option>
                  <option value='Sunil'>Sunil</option>
                  <option value='I&ntilde;aki'>I&ntilde;aki</option>
                  <option value='Gaby'>Gaby</option>
                  <option value='Felix&#x20;Angel'>Felix Angel</option>
                  <option value='Titan'>Titan</option>
                  <option value='Hugo&#x20;Costa'>Hugo Costa</option>
                  <option value='Nicolas'>Nicolas</option>
                  <option value='Fede'>Fede</option>
                  <option value='Facebook'>Facebook</option>
                  <option value='Twitter'>Twitter</option>
                  <option value='Google&#x2b;'>Google&#x2b;</option>
                </select>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div className="field">
            <label className="label">{this.props.t('form.field_6')}<span className="has-text-danger">*</span></label>
            <div className="control">
              <textarea className="textarea" required placeholder="Tell us briefly how we can help you tokenize" name='Description' maxLength='32000'></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input autoComplete='off' required type='checkbox' name='privacyTool' />
                <a href="#terms">{this.props.t('form.terms')}</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <input className="button is-link" id='formsubmit' type='submit' value={this.props.t('form.buttonSend')} />
            </div>
            <div className="control">
              <input className="button is-text" type='reset' value={this.props.t('form.buttonReset')} />
            </div>
          </div>
        </form>

      </section>

    )
  }
}

export default CTA;