import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/ds-website-components/FooterMessage';
import DSRadio from '../../components/Radio/index'
import styled from 'styled-components'
import '../../scss/_styles.scss'

class RadioPage extends React.Component {

  render() {
    return (
      <div className="ds-app-grid">
        <DSLeftNav />

        <div className="ds-main-content">
          <div className="ds-container">
            <h1>Radio</h1>

            <h3 className="subheading">Binary radios allow the selection of a single option from a set.</h3>

            <div className="ds-col-container">
              <div className="ds-col-6">
                <DSRadio
                  name="radio"
                  label="Unchecked radio"
                />
              </div>
              <div className="ds-col-6">
                <DSRadio
                  name="radio"
                  label="Checked radio"
                  checked
                />
              </div>
            </div>

            <h4 className="ds-usage-title">Usage</h4>

            <p>Radios are tools the user has to communicate something to the system. In this system they are a Presentational React Component that you can use by simply instantiate a <code>DSRadio</code> tag and passing attributes for name <code>(string)</code>, onChange <code>(function)</code>, checked <code>(boolean)</code>, and label <code>(string)</code>.</p>

            <Highlight className='jsx'>
              {`class DemoPage extends React.Component {

  handleChange(event) {
    // do something
  }

  render() {
    return (
      <DSRadio
        name="radio"  
        label="Option 1"
        onChange={this.handleChange}
      />
              
      <DSRadio
        name="radio"  
        label="Option 2"
        onChange={this.handleChange}
        checked
      />
    )
  }
}`}
            </Highlight>

          </div>

          <FooterMessage />

        </div>
      </div>
    );
  }
}


export default RadioPage;