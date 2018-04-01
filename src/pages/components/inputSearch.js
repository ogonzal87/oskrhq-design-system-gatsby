import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage';
import { DSInputSearch } from '../../../node_modules/oskrhq-design-system/lib/index.js'


const InputSearchPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Input Search</h1>

        <h3 className="subheading">Search Inputs allow users to search data matching a value.</h3>

        <DSInputSearch label="Full Name" placeholder="Search Users" autoFocus />

        <div className="ds-col-container">
          <div className="ds-col-6">
            
          </div>
          <div className="ds-col-6">
            <DSInputSearch label="Full Name" value="John Doe" />
          </div>
        </div>


        <h4 className="ds-usage-title">Usage</h4>

        <p>Input Search is a Presentational React Component that you can use by simply instantiate a <code>DSInputSearch</code> tag and passing an optional attribute for placeholder <code>(string)</code>.</p>

        <Highlight className='html'>
          {`<DSInputSearch 
  placeholder="Search List"
  onChange="doSomething"
/>`}
        </Highlight>

      </div>

      <FooterMessage />

      </div>
    </div>
)

export default InputSearchPage;