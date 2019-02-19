import React, { Component } from "react";
import cta from '../assets/img/cta.png'
import logo from '../assets/img/logo--small.png'

class CTA extends Component {
  render() {
    return (
      <section id="contact" className="section columns is-medium is-vcentered is-paddingless">
        <div className="image is-5 column is-paddingless">
          <figure className="image">
            <img src={cta} alt="" />
          </figure>
        </div>
        <form className="column" action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3718183000000277001' method='POST' style={{backgroundColor: '#0a58a3'}}>
          <h2 className="title is-4" style={{ backgroundColor: 'blue' }}>{this.props.t('form.title')}</h2>
          <div className="title is-4 has-text-centered is-flex">
            <figure className="image is-64x64" style={{marginRight: '1rem'}}>
              <img src={logo} alt="" />
            </figure>
            <p>{this.props.t('form.subtitle_1')}<br />{this.props.t('form.subtitle_2')}</p>
          </div>
          <input type='hidden' name='xnQsjsdp' value='26ded01eee3cbb74693abaeee34e2f8acbb50ca314ea68813ba8b57665b4dc48' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='hidden' name='xmIwtLD' value='902ae1508809b664f4a8880feb7226435ad252e90c524204e2b557a276287e3b' />
          <input type='hidden' name='actionType' value='TGVhZHM=' />
          <input type='hidden' name='returnURL' value='https://landing.globatalent.com/redirect' />
          <input type='hidden' name='LEADCF1' value='B2B' />

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_1.title')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" required type="text" placeholder={this.props.t('form.field_1.help_1')} maxLength='40' name='First Name' />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input" required type="text" placeholder={this.props.t('form.field_1.help_2')} maxLength='80' name='Last Name' />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_2.title')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" required type="email" maxLength='100' name='Email' placeholder={this.props.t('form.field_2.help_1')} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input" type="tel" placeholder={this.props.t('form.field_2.help_2')} maxLength='30' name='Phone' />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_3.title')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" required type="text" placeholder={this.props.t('form.field_3.help')} maxLength='100' name='Company' />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_4.title')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" required type="text" placeholder={this.props.t('form.field_4.help')} maxLength='100' name='Country' />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label">{this.props.t('form.field_6.title')}<span className="has-text-danger">*</span></label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name='Industry'>
                      <option value='-None-'>-None-</option>
                      <option value={this.props.t('form.field_6.option_1')}>{this.props.t('form.field_6.option_1')}</option>
                      <option value={this.props.t('form.field_6.option_2')}>{this.props.t('form.field_6.option_2')}</option>
                      <option value={this.props.t('form.field_6.option_3')}>{this.props.t('form.field_6.option_3')}</option>
                      <option value={this.props.t('form.field_6.option_4')}>{this.props.t('form.field_6.option_4')}</option>
                      <option value={this.props.t('form.field_6.option_5')}>{this.props.t('form.field_6.option_5')}</option>
                      <option value={this.props.t('form.field_6.option_6')}>{this.props.t('form.field_6.option_6')}</option>
                      <option value={this.props.t('form.field_6.option_7')}>{this.props.t('form.field_6.option_7')}</option>
                      <option value={this.props.t('form.field_6.option_8')}>{this.props.t('form.field_6.option_8')}</option>
                      <option value={this.props.t('form.field_6.option_9')}>{this.props.t('form.field_6.option_9')}</option>
                      <option value={this.props.t('form.field_6.option_10')}>{this.props.t('form.field_6.option_10')}</option>
                      <option value={this.props.t('form.field_6.option_11')}>{this.props.t('form.field_6.option_11')}</option>
                      <option value={this.props.t('form.field_6.option_12')}>{this.props.t('form.field_6.option_12')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">{this.props.t('form.field_5.title')}<span className="has-text-danger">*</span></label>
            <div className="control">
              <textarea className="textarea" required placeholder={this.props.t('form.field_5.help')} name='Description' maxLength='32000'></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input autoComplete='off' required type='checkbox' name='privacyTool' />
                <a href="https://market.globatalent.com/terms" rel="noopener noreferrer" target="_blank">{this.props.t('form.terms')}</a>
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