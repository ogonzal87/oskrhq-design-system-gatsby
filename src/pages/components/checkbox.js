import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage';
import { DSCheckbox } from 'oskrhq-design-system'
import styled from 'styled-components'

class CheckboxPage extends React.Component {
  state = {
    checkboxA: true,
    checkboxB: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div className="ds-app-grid">
        <DSLeftNav />

        <div className="ds-main-content">
          <div className="ds-container">
            <h1>Checkbox</h1>

            <h3 className="subheading">
              Binary checkboxes allow the selection of multiple options from a
              set.
            </h3>

            <div className="ds-col-container">
              <div className="ds-col-6">
                <DSCheckbox
                  name="checkboxA"
                  labelText="Unchecked Checkbox"
                  onChange={this.handleChange('checkboxA')}
                  value="checkboxA"
                  checked={this.state.checkboxA}
                />
              </div>
              <div className="ds-col-6">
                <DSCheckbox  
                  name="checkboxB"
                  labelText="Checked Checkbox"
                  onChange={this.handleChange('checkboxB')}
                  value="checkboxB"
                  checked={this.state.checkboxB}
                />
              </div>
            </div>

            <h4 className="ds-usage-title">Usage</h4>

            <p className="ds-subheading-text-style">
              Checkboxes are tools the user has to communicate something to the
              app. In this app they are a Presentational React Components that
              you can use by simply instantiate a <code>DSCheckbox</code> tag
              and passing attributes for name <code>(string)</code>, onChange{" "}
              <code>(function)</code>, checked <code>(boolean)</code>, and label{" "}
              <code>(string)</code>.
            </p>

            <Highlight className="jsx">
              {`class DemoPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (

      <DSCheckbox
        name="checkboxA"  
        labelText="Option 1"
        onChange={this.handleChange('checkboxA')}
        value="checkboxB"
        checked={this.state.checkboxA}
      />
              
      <DSCheckbox
        name="checkboxB"  
        labelText="Option 2"
        onChange={this.handleChange('checkboxB')}
        value="checkboxB"
        checked={this.state.checkboxB}
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


export default CheckboxPage;