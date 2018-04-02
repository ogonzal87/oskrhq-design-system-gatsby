import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage';

const Motion = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Motion</h1>

        <h3 className="subheading">Motion not only gives life to interfaces, it also gives them a personality and purpose.</h3>

        <h4 className="ds-usage-title">Speed</h4>
        <div className="ds-motion-specimens-container">
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-duration(fast)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-duration1"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-duration(base)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-duration2"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-duration(slow)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-duration3"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-duration(slower)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-duration4"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-duration(slowest)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-duration5"></div>
          </div>
        </div>


        <h4 className="ds-usage-title">Easing</h4>

        <div className="ds-motion-specimens-container">
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(base)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing1"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(in)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing2"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(out)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing3"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(excite)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing4"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(overshoot)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing5"></div>
          </div>
          <div className="ds-motion-specimen-container">
            <div className="ds-motion-specimen-code">
              <code>ds-easing(anticipate)</code>
            </div>
            <div className="ds-motion-specimen ds-motion-specimen-easing6"></div>
          </div>
        </div>

        <h4 className="ds-usage-title">Usage</h4>

        <p>When declaring transitions, make use of <code>ds-duration($variable)</code> sass function for timing where <code>$variable</code> is a value in a predictive scale ranging from "slowest" to "fast", and <code>ds-easing($variable)</code> where <code>$variable</code> is a cubic bezier curve declaring the type of animation given a certain duration. You can choose from "base", "in", "out", "excite", "overshot", "anticipate". Hover the circles above to see the difference between each of them.</p>

        <Highlight className='scss'>
          {`.my-new-cool-ball {
  transition: all ds-easing(overshoot) ds-duration(slowest);
  height: ds-space(extra-loose);
  width: ds-space(extra-loose);
  border-radius: 50%;
  background: ds-color(primary, 400);
  box-shadow: ds-depth(100);

  .container:hover & {
    background: ds-color(danger, 400);
    box-shadow: ds-depth(500);
    transform: translateX(500px);
  }
}`}
        </Highlight>

        <iframe height='335' scrolling='no' title='oskrhq-design-system-motion' src='//codepen.io/ogonzal87/embed/GxRBqz/?height=335&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/GxRBqz/'>oskrhq-design-system-motion</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Motion