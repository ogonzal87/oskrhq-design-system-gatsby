import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import PrimaryColorsImg from '../assets/color-page/ds-primary-colorss.png'
import FeedbackColorsImg from '../assets/color-page/ds-feedback-colors.png'
import NeutralColorsImg from '../assets/color-page/ds-neutral-colors.png'

const Color = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Colors</h1>
        <h3>There are three categires of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>

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

        <p>All the colors above have a Base color or Hue (400). From this color you can extract shades and tints of that Heu. I am using a 10% increment and decrement.</p>
        
        <p>Brand Colors are the personality of your brand. They should be used as Accent colors for things like Primary Buttons, CTA's and links. Feedback colors are colors you use to comnnunicate status to a user and Nuetral Colors you use for things like copy, borders, shadows, backgrounds, etc.</p>
      </div>
    </div>
  </div>
)

export default Color
