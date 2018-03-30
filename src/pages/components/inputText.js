import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/ds-website-components/FooterMessage';
import DSInputText from '../../components/InputText/index'
import styled from 'styled-components'
import '../../scss/_styles.scss'

const InputTextPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Input Text</h1>

        <h3 className="subheading">Text inputs allow users to input text and usually appear in forms. Use when the application requires content from the user.</h3>

        <div className="ds-col-container">
          <div className="ds-col-6">
            <DSInputText label="Full Name" placeholder="placeholder..."/>
          </div>
          <div className="ds-col-6">
            <DSInputText label="Full Name" value="John Doe"/>
          </div>
        </div>


        <h4 className="ds-usage-title">Usage</h4>

        <p>Input Fields are tools the user has to communicate something to the app. In the system they are a Presentational React Components that you can use by simply instantiate a <code>DSInputText</code> tag and passing attributes for label <code>(string)</code>, size <code>(string)</code>, value <code>(string || number)</code> and a placeholder <code>(string)</code>.</p>

        <Highlight className='html'>
          {`<DSInputText 
  label="Full Name"
  placeholder="primary"
  size="fluid"
  onChange="doSomething"
/>`}
        </Highlight>

      </div>

      <FooterMessage />

      </div>
    </div>
)

export default InputTextPage;