import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import PrimaryColorsImg from '../assets/color-page/ds-primary-colorss.png'
import FeedbackColorsImg from '../assets/color-page/ds-feedback-colors.png'

const Color = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Colors</h1>
        <h3>There are three categires of colors. Brand, User Feedback and Neutral colors. Every UI element consumes these colors.</h3>

        <div className="ds-color-wrapper">
          <div className="col-1">
            <h4>Brand Colors</h4>
            <img src={PrimaryColorsImg} className="brand-colors-container" />
          </div>

          <div className="col-1">
            <h4>Feedback Colors</h4>
            <img src={FeedbackColorsImg} className="feedback-colors-container" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Color
