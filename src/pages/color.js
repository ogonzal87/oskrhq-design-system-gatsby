import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import PrimaryColorsImg from '../assets/color-page/ds-primary-colors.png'
import FeedbackColorsImg from '../assets/color-page/ds-feedback-colors.png'
import NeutralColorsImg from '../assets/color-page/ds-neutral-colors.png'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../components/FooterMessage'
import styled from 'styled-components'

const SectionCopy = styled.div`
  margin: 200px 0 200px 0;
`

const SectionCode = styled.div`
  margin-top: 32px;
`

const SectionCodePen = styled.div`
  margin: 200px 0;
`

const Color = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Colors</h1>
        <h4 className="subheading">The skill of coloring interfaces is being able to modify one base color into many different variations.</h4>

        <div className="ds-color-wrapper">
          <div className="col-1">
            <h5>Brand</h5>
            <img src={PrimaryColorsImg} className="brand-colors-container" />
          </div>

          <div className="col-1">
            <h5>Feedback</h5>
            <img src={FeedbackColorsImg} className="feedback-colors-container" />
          </div>

          <div className="col-1">
            <h5>Neutral</h5>
            <img src={NeutralColorsImg} className="neutral-colors-container" />
          </div>
        </div>

        <SectionCopy>
          <div className="ds-col-container">
            <div className="ds-col-6">
              <p className="ds-overline-text-style">Color Scale</p>
              <p className="ds-color-page-body  ">Every color in the System is defined above. Each heu has a Base (400) and from this, I extract shades and tints of that heu. This provides a predictable color scale of "allowed" colors in the system; the higher a number is, the darker the color. I use a 10% increment and decrement but this can be any value. </p>
            </div>

            <div className="ds-col-6">
              <p className="ds-overline-text-style">Color Types</p>
              <p className="ds-color-page-body  "><strong>Brand Colors</strong> are the personality of the brand. They should be used as accent elements such as primary buttons, CTA's and links. <strong>Feedback Colors</strong> are used to communicate Status to the user and <strong>Neutral Colors</strong> are used for things like text, borders, shadows, background colors, etc.</p>
            </div>
          </div>
    
          <div className="ds-col-container" style={{marginTop: '32px'}}>
            <div className="ds-col-6">
              <p className="ds-overline-text-style">Color Palette Rationale</p>
              <p>I wanted colors to be an extension of my character and the user to hopefully feel that. I chose an electric purple because I thought it matched my energetic personality. Since I tend to gravitate to calm and minimalistic design techniques, I contrasted the brand colors with light-gray backgrounds, letting them act as accents in order to instigate user interaction.</p>
            </div>
          </div>
        </SectionCopy>



        <h4 className="ds-usage-title">Usage</h4>

        <p>All UI elements make use of a sass function; <code>ds-color($variable, $range)</code> where <code>$varible</code> is the type of color and the <code>$range</code> is the number in the scale which determines how light or dark that color will be. This ensures consistency as it prevents hard coding #HEX values when creating or updating UI elements or pages.</p>

        <SectionCode>
          <Highlight className='scss'>
          {`.my-new-cool-box {
  background: ds-color(tertiary, 400);
  width:      100%;
  height:     ds-space(super-loose);
}`}
          </Highlight>
        </SectionCode>

        <SectionCodePen>
          <h4>Playground</h4>
          <p>Feel free to play around with the utility funtions. Just scroll all the way to the bottom of the SCSS file and create some shapes using the functions.</p>
          <iframe height='507' scrolling='no' title='oskrhq-design-system-color' src='//codepen.io/ogonzal87/embed/mXZwWP/?height=507&theme-id=dark&default-tab=css,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true' style={{ width: '100%' }}>See the Pen <a href='https://codepen.io/ogonzal87/pen/mXZwWP/'>oskrhq-design-system-color</a> by Oscar (<a href='https://codepen.io/ogonzal87'>@ogonzal87</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
        </SectionCodePen>

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default Color
