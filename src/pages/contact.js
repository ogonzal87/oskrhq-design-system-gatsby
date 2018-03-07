import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/dracula.css'


const Contact = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Let's Talk...</h1>

        <h2>For more info about this Design System and any others I have created, you can send me an email to <a>oscar@oskrhq.com</a></h2>

      </div>
    </div>
  </div>
)

export default Contact