import React from 'react'
import DSLeftNav from '../components/LeftNav/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage/FooterMessage'
import styled from 'styled-components'

const SectionCopy = styled.div`
  margin: 200px 0 300px 0;
`

const Motion = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Motion</h1>

        <h4 className="subheading"><i>“Animation offers a medium of story telling and visual entertainment which can bring pleasure and information.”</i> - Walter Elias Disney.</h4>

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


        <SectionCopy>
          <div className="ds-col-container">
            <div className="ds-col-6">
              <p className="ds-overline-text-style">Animations Rationale</p>
              <p  >Animating digital objects gets us even closer to the physical world. My inspiration for it came from Disney and a book written by Frank Thomas and Ollie Jonhston — <i><a href="https://youtu.be/jn5OB12u8Pw" target="_blank">The Illusion of Life</a></i>. In it, they explain the 12 principles of animation which are taken from the laws of physics. Although Disney's animations are highly exaggerated (on purpose, of course), we can leverage these principles to create <i>illution of life</i> in out digital interfaces.</p>
            </div>


            <div className="ds-col-6">
              <p className="ds-overline-text-style">Speed and easing</p>
              <p  >CSS transitions allows you to change property values smoothly (from one value to another), over a given duration. Speed is how fast or slow an element moves or changes. Easing explains how the element moves or changes through a given path.</p>
            </div>
          </div>
        </SectionCopy>



        <h4 className="ds-usage-title">Usage</h4>

        <p  >When declaring transitions, make use of <code>ds-duration($variable)</code> sass function for timing where <code>$variable</code> is a value in a predictive scale ranging from "slowest" to "fast", and <code>ds-easing($variable)</code> where <code>$variable</code> is a cubic bezier curve declaring the type of animation given a certain duration. You can choose from "base", "in", "out", "excite", "overshot", "anticipate". Hover the circles above to see the difference between each of them.</p>

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