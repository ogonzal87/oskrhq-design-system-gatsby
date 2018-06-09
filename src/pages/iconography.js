import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'
import dsIconName from '../assets/icons/icon-font/codepoints'


const Iconography = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Iconography</h1>
        
        <h4 className="subheading">Iconography is a visual language within the system that uses images and symbols to represent objects or meaning.</h4>

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

        <div className="ds-col-container">
          
          <div className="ds-col-6">
            <p  >The system uses the Material Design Icon Font, although I am creating my own set using svg's and will be releasing them soon. To use Material Icons, you can just include a <code>i</code> tag in your mark up and add one of the utility classes above for sizing.</p>
          </div>

          <div className="ds-col-6">
            <p  >☝🏽<strong>For the full set of icons and names, check out <a href="https://material.io/icons/" target="_blank">Material Design's Icons website</a>.</strong></p>  
          </div>

        </div>

        <Highlight className='html'>
          {`<i class="material-icons ds-icon-xlarge">face</i>`}
        </Highlight>    

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