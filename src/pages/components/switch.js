import React from 'react'
import DSLeftNav from '../../components/LeftNav/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/dracula.css'
import FooterMessage from '../../components/FooterMessage/FooterMessage'
import { DSSwitch } from 'oskrhq-design-system'

class SwitchPage extends React.Component {
  state = {
    checkedA: false,
    checkedB: true
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
            <h1>Switch</h1>

            <h4 className="subheading">
              Binary switches toggles the state of a single settings option.{" "}
            </h4>

            <div className="ds-col-container">
              <div className="ds-col-6">
                <DSSwitch
                  name="checkedA"
                  onChange={this.handleChange('checkedA')}
                  defaultChecked={this.state.checkedA}
                />
              </div>
              <div className="ds-col-6">
                <DSSwitch
                  name="checkedB"
                  onChange={this.handleChange('checkedB')}
                  defaultChecked={this.state.checkedB}
                />
              </div>
            </div>

            <h4 className="ds-usage-title">Usage</h4>

            <p  >
              Switches are tools the user has to communicate something to the
              app. In this system they are a Presentational React Components
              that you can use by simply instantiate a <code>DSSwitch</code> tag
              and passing attributes for name <code>(string)</code>, onChange{" "}
              <code>(function)</code>, and checked <code>(boolean)</code>.
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

      <DSSwitch
        name="checkedA"  
        onChange={this.handleChange('checkedA')}
        defaultChecked={this.state.checkedA}
      />
              
      <DSSwitch
        name="checkedB"  
        onChange={this.handleChange('checkedB')}
        defaultChecked={this.state.checkedB}
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


export default SwitchPage;