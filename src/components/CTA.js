import React, { Component } from "react";
import cta from '../assets/img/cta.png'

class CTA extends Component {
  render() {
    return (
      <section id="contact" class="section columns is-paddingless is-large" style={{ backgroundColor: "#f7faff" }}>
        <figure class="image is-half column is-paddingless">
          <img src={cta} className="is-fullheight" />
        </figure>
        <div class="column is-1"></div>

        <form class="column is-4 is-vcentered" action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3718183000000277001' method='POST' onSubmit='javascript:document.charset="UTF-8";' accept-charset='UTF-8'>
          <h2 className="title is-4">Looking for funds for your club or your sport career?</h2>
          <p className="title is-6">Are you an athlete, club or organization? <br /> We can help you to start a campaign now!!</p>
          <input type='hidden' name='xnQsjsdp' value='26ded01eee3cbb74693abaeee34e2f8acbb50ca314ea68813ba8b57665b4dc48' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='hidden' name='xmIwtLD' value='902ae1508809b664f4a8880feb7226435ad252e90c524204e2b557a276287e3b' />
          <input type='hidden' name='actionType' value='TGVhZHM=' />
          <input type='hidden' name='returnURL' value='https://market.globatalent.com' />
          <input type='hidden' name='LEADCF1' value='B2B' />

          <div class="field">
            <label class="label">First Name<span className="has-text-danger">*</span></label>
            <div class="control">
              <input class="input" required type="text" placeholder="Your first name" maxlength='40' name='First Name' />
            </div>
          </div>

          <div class="field">
            <label class="label">Last Name<span className="has-text-danger">*</span></label>
            <div class="control">
              <input class="input" required type="text" placeholder="Your last name" maxlength='80' name='Last Name' />
            </div>
          </div>

          <div class="field">
            <label class="label">Company<span className="has-text-danger">*</span></label>
            <div class="control">
              <input class="input" required type="text" placeholder="Text input" maxlength='100' name='Company' />
            </div>
          </div>

          <div class="field">
            <label class="label">Email<span className="has-text-danger">*</span></label>
            <div class="control">
              <input class="input" required type="email" maxlength='100' name='Email' placeholder="Your contact mail" />
            </div>
          </div>

          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <input class="input" type="tel" placeholder="Your contact phone (Optional)" maxlength='30' name='Phone' />
            </div>
          </div>

          <div class="field">
            <label class="label">How did you find us?</label>
            <div class="control">
              <div class="select">
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

          <div class="field">
            <label class="label">Description<span className="has-text-danger">*</span></label>
            <div class="control">
              <textarea class="textarea" required placeholder="Tell us briefly how we can help you tokenize" name='Description' maxlength='32000'></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input autocomplete='off' onclick='disableSubmit()' required type='checkbox' name='privacyTool' />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <input class="button is-link" id='formsubmit' type='submit' value='Submit' />
            </div>
            <div class="control">
              <input class="button is-text" onclick='disableSubmitwhileReset()' type='reset' value='Reset' />
            </div>
          </div>
        </form>

      </section>

    )
  }
}

export default CTA;