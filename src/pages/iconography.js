import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'


const Iconography = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Iconography</h1>
        <h3 className="subheading">There are three categories of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>
      </div>
    </div>
  </div>
)

export default Iconography