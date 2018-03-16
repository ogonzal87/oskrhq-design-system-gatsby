import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../../components/ds-website-components/LeftNav'
import Highlight from 'react-highlight'
import '../../../node_modules/highlight.js/styles/tomorrow-night-eighties.css'
import FooterMessage from '../../components/ds-website-components/FooterMessage';
import DSButton from '../../components/Button/index'


const ButtonsPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Buttons</h1>

        <h3 className="subheading">These are buttons</h3>

        <DSButton />
      </div>
    </div>
  </div>
)

export default ButtonsPage;