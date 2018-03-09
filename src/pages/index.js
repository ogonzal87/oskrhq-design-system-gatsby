import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import logoBrush from '../assets/brush/brush.svg'
import Splash from '../assets/brush/splash.svg'

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">

        <img src={logoBrush} className="ds-intro-logo-brush" />

        <h3 className="subheading">A mostly reasonable although highly opinionated approach to building User Interfaces.</h3>

        <img src={Splash} className="ds-intro-splash" />

      </div>

      <span className="ds-subheading-text-style ds-footer-text">Made and maintained with tons of passion by <a href="https://www.oskrhq.com/" target="_blank">Oscar Gonzalez</a></span>

    </div>
  </div>
)

export default IndexPage
