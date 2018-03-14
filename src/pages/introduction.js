import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import logoBrush from '../assets/brush/brush.svg'
import Splash from '../assets/brush/splash.svg'
import FooterMessage from '../components/FooterMessage'

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">

        <img src={logoBrush} className="ds-intro-logo-brush" />

        <h3 className="subheading">A mostly reasonable although opinionated approach to building Responsive User Interfaces sharing a base anatomy.</h3>

        <img src={Splash} className="ds-intro-splash" />

        {/* <p>A style guide + UI Library of React Components bundled into one.</p> */}

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default IndexPage
