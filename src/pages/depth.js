import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'

const Depth = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Depth</h1>

        <h3 className="subheading">There are three categories of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>

        <div className="ds-depth-specimens-container">
          <div className="ds-depth-specimen ds-depth-specimen1"></div>
          <div className="ds-depth-specimen ds-depth-specimen2"></div>
          <div className="ds-depth-specimen ds-depth-specimen3"></div>
          <div className="ds-depth-specimen ds-depth-specimen4"></div>
          <div className="ds-depth-specimen ds-depth-specimen5"></div>
        </div>

        <div className="ds-depth-specimens-container" style={{ marginTop: '32px' }}>
          <span className="ds-depth-specimen-text"><code>ds-depth(100)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(200)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(300)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(400)</code></span>
          <span className="ds-depth-specimen-text"><code>ds-depth(500)</code></span>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p>All UI elements make use of the sass mixin <code>ds-color($variable, range)</code>. This ensures consistency since all colors are extracted from the same base. Avoid hard coding #HEX values when creating new UI elements or pages.</p>

        <Highlight className='scss'>
          {`.my-new-cool-container-coming-at-you {
  box-shadow: ds-depth(500);
  background: ds-color(secondary, 300);
  width:      ds-space(super-loose);
  height:     ds-space(super-loose);
}`}
        </Highlight>

      </div>
    </div>
  </div>
)

export default Depth