import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/ds-website-components/FooterMessage';

const Depth = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Depth</h1>

        <h3 className="subheading">Nature has 3 dimenssions... So does this system. You can use 5 levels of depth to communicate hierarchy in the UI.</h3>

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

        <p>There are 5 levels of depth in By making use of the sass function <code>ds-depth($range)</code>, you can create levels of visual hierarchy. The higher the number the more elevated an item will appear. Use this when you are trying to emphasize sections of UI like containers or buttons. This not only ensures that we have consistent values for <code>box-shadow</code> declarations but also provides meaning to depth by aidding a 3rd dimension.</p>

        <Highlight className='scss'>
          {`.my-new-cool-container-coming-at-you {
  box-shadow: ds-depth(500);
  background: ds-color(secondary, 300);
  width:      ds-space(super-loose);
  height:     ds-space(super-loose);
}`}
        </Highlight>

        <iframe height='398' scrolling='no' title='oskrhq-design-system-depth' src='//codepen.io/ogonzal87/embed/xYvLrw/?height=398&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/xYvLrw/'>oskrhq-design-system-depth</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>
      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Depth