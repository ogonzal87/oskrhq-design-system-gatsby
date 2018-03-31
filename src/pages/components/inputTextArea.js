import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/ds-website-components/FooterMessage';
import DSTextArea from '../../components/TextArea/index'
import styled from 'styled-components'
import '../../scss/_styles.scss'

const TextAreaPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Text Area</h1>

        <h3 className="subheading">Text Area fields allow users to input long text. Use when the application requires long-form content from the user.</h3>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <DSTextArea label="Comment (Optional)" placeholder="placeholder..." rows="4"/>
          </div>
          <div className="ds-col-6">
            <DSTextArea label="Comment (Optional)" value="Lorem ipsum dolor amet blue bottle street art iceland health goth chartreuse snackwave cornhole drinking vinegar microdosing XOXO." rows="4" />
          </div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p>Text Areas are tools the user has to communicate something to the app. In this system, they are a Presentational React Components that you can use by simply instantiate a <code>DSTextArea</code> tag and passing attributes for label <code>(string)</code>, cols <code>(string)</code>, value <code>(string)</code> and a placeholder <code>(string)</code>.</p>

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