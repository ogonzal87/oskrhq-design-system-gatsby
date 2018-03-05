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
        <h1>Contact</h1>
        <script src="https://gist.github.com/ogonzal87/90381e4309044cdca78439885a47b473.js"></script>

        <Highlight className='scss'>
          {`.my-new-big-text {
  font-size:   ds-font-size(display4, base);
  line-height: ds-line-height(display4, base);
  font-weight: ds-font-weight(display4, bold);
  color:       ds-color(secondary, 600);
}`}
        </Highlight>
      </div>
    </div>
  </div>
)

export default Contact