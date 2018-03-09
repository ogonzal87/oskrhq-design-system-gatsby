import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'

const Space = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Space</h1>
      </div>

      <span className="ds-subheading-text-style ds-footer-text">Made and maintained with tons of passion by <a href="https://www.oskrhq.com/" target="_blank">Oscar Gonzalez</a></span>

    </div>
  </div>
)

export default Space
