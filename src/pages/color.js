import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import PrimaryColorsImg from '../assets/color-page/ds-primary-colors.png'
import FeedbackColorsImg from '../assets/color-page/ds-feedback-colors.png'
import NeutralColorsImg from '../assets/color-page/ds-neutral-colors.png'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'

const Color = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Colors</h1>
        <h3 className="subheading">There are three categories of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>

        <div className="ds-color-wrapper">
          <div className="col-1">
            <h4>Brand</h4>
            <img src={PrimaryColorsImg} className="brand-colors-container" />
          </div>

          <div className="col-1">
            <h4>Feedback</h4>
            <img src={FeedbackColorsImg} className="feedback-colors-container" />
          </div>

          <div className="col-1">
            <h4>Neutral</h4>
            <img src={NeutralColorsImg} className="neutral-colors-container" />
          </div>
        </div>

        <p className="ds-color-page-body">All the colors above have a Base color or Hue (400). From this color you can extract shades and tints of that Heu. I am using a 10% increment and decrement.</p>

        <p className="ds-color-page-body">Brand Colors are the personality of the brand. They should be used as Accent colors for things like Primary Buttons, CTA's and links. Feedback colors are colors you use to communicate status to the user and Neutral Colors are used for things like text, borders, shadows, backgrounds, etc.</p>

        <h4 className="ds-usage-title">Usage</h4>

        <p>All UI elements make use of the sass function <code>ds-color($variable, $range)</code>. This ensures consistency since all colors are extracted from the same base. Avoid hard coding #HEX values when creating new UI elements or pages.</p>

        <Highlight className='scss'>
          {`.my-new-cool-box {
  background: ds-color(tertiary, 400);
  width:      100%;
  height:     ds-space(super-loose);
}`}
        </Highlight>

        <iframe height='507' scrolling='no' title='oskrhq-design-system-color' src='//codepen.io/ogonzal87/embed/mXZwWP/?height=507&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/mXZwWP/'>oskrhq-design-system-color</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
        </iframe>

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Color
