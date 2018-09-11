import React from 'react'
import DSLeftNav from '../../components/LeftNav/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage/FooterMessage'
import { DSTextArea } from 'oskrhq-design-system'

const TextAreaPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Text Area</h1>

        <h4 className="subheading">Text Area fields allow users to input long text. Use when the application requires long-form content from the user.</h4>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <DSTextArea label="Comment (Optional)" placeholder="placeholder..." rows="4" />
          </div>
          <div className="ds-col-6">
            <DSTextArea label="Comment (Optional)" value="Lorem ipsum dolor amet blue bottle street art iceland health goth chartreuse snackwave cornhole drinking vinegar microdosing XOXO." rows="4" />
          </div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p  >Text Areas are tools the user has to communicate something to the app. In this system, they are a Presentational React Components that you can use by simply instantiating a <code>DSTextArea</code> tag and passing attributes for label <code>(string)</code>, cols <code>(string)</code>, value <code>(string)</code> and a placeholder <code>(string)</code>.</p>

        <Highlight className='html'>
          {`<DSTextArea 
  label="Comment (Optional)"
  placeholder="Type..."
  cols="4"
/>`}
        </Highlight>

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default TextAreaPage;