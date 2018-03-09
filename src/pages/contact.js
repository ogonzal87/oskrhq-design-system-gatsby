import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/dracula.css'
import PresentationPic from '../assets/profile-pic/presentation-pic-min.jpg'


const Contact = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Let's Talk...</h1>

        <h2 className="ds-contact-subheading">For more info about this Design System and any others I have created, you can send me an email to <a href="mailto:oscar@oskrhq.com?Subject=Hello!" target="_top">oscar@oskrhq.com</a></h2>

        <div className="ds-contact-presentation-pic-container">
          <img src={PresentationPic} className="ds-contact-presentation-pic" />
        </div>

      </div>

      <span className="ds-subheading-text-style ds-footer-text">Made and maintained with tons of passion by <a href="https://www.oskrhq.com/" target="_blank">Oscar Gonzalez</a></span>

    </div>
  </div>
)

export default Contact