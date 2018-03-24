import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/ds-website-components/FooterMessage'
import dsIconName from '../assets/icons/icon-font/codepoints'


const Iconography = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Iconography</h1>
        
        <h3 className="subheading">There are three categories of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>

        <div className="ds-iconography-specimen-container">
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-tiny">face</i>
            <code>.ds-icon-tiny</code>
          </div>
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-small">face</i>
            <code>.ds-icon-small</code>
          </div>
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-medium ">face</i>
            <code>.ds-icon-medium</code>
          </div>
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-large">face</i>
            <code>.ds-icon-large</code>
          </div>
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-xlarge">face</i>
            <code>.ds-icon-xlarge</code>
          </div>
          <div className="ds-iconography-specimen">
            <i className="material-icons ds-icon-xxlarge">face</i>
            <code>.ds-icon-xxlarge</code>
          </div>
        </div>  

        <h4>Usage</h4>

        <p>Since the system is using Material Design icons, you can just include the icon in your mark up with an <code>i</code> tag and add a utility class to keep sizing consistent.</p>

        <Highlight className='html'>
          {`<i className="material-icons ds-icon-xlarge">face</i>`}
        </Highlight>

        <span className="ds-subheading-text-style">For the full set of icons and names, check out <a href="https://material.io/icons/" target="_blank">Material Design's Icons</a>.</span>        

        <div className="ds-iconography-showcase-container">

          {dsIconName.map((iconName, index) => {
            return (
              <div className="ds-iconography-showcase-item">
                <i className="material-icons ds-icon-large">{iconName}</i>
                <code>{iconName}</code>
              </div>
            );
            })
          }
        </div>
      </div>
      <FooterMessage />
    </div>
  </div>
)

export default Iconography